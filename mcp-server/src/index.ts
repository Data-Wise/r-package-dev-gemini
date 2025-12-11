import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";
import { writeFile, unlink } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { randomBytes } from "crypto";

const execAsync = promisify(exec);

// Create server instance
const server = new Server(
  {
    name: "r-package-dev",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define Tool Schemas
const RCheckSchema = z.object({
  path: z.string().default(".").describe("Path to the R package"),
});

const RDocumentSchema = z.object({
  path: z.string().default(".").describe("Path to the R package"),
});

// List Tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "r_check",
        description: "Run R CMD check via rcmdcheck and return structured results (errors, warnings, notes).",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "Path to the R package (default: current dir)",
            },
          },
        },
      },
      {
        name: "r_document",
        description: "Run devtools::document() to generate documentation.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "Path to the R package (default: current dir)",
            },
          },
        },
      },
    ],
  };
});

// Handle Tool Calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "r_check") {
      const { path } = RCheckSchema.parse(args || {});
      return await handleRCheck(path);
    }
    
    if (name === "r_document") {
      const { path } = RDocumentSchema.parse(args || {});
      return await handleRDocument(path);
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${errorMessage}` }],
      isError: true,
    };
  }
});

// Helper: r_check implementation
async function handleRCheck(pkgPath: string) {
  // R script to run rcmdcheck and output JSON
  // We use a safe temp file approach
  const rScript = `
    tryCatch({
      if (!requireNamespace("rcmdcheck", quietly = TRUE)) {
        stop("Package 'rcmdcheck' is required. Please install it with install.packages('rcmdcheck').")
      }
      if (!requireNamespace("jsonlite", quietly = TRUE)) {
        stop("Package 'jsonlite' is required.")
      }
      
      res <- rcmdcheck::rcmdcheck(path = '${pkgPath.replace(/'/g, "'\'")}', args = c('--no-manual', '--as-cran'), error_on = 'never', quiet = TRUE)
      
      output <- list(
        status = 'success',
        errors = res$errors,
        warnings = res$warnings,
        notes = res$notes
      )
      cat(jsonlite::toJSON(output, auto_unbox = TRUE))
    }, error = function(e) {
      cat(jsonlite::toJSON(list(status = 'error', message = e$message), auto_unbox = TRUE))
    })
  `;

  const tempFile = join(tmpdir(), `r-check-${randomBytes(4).toString("hex")}.R`);
  await writeFile(tempFile, rScript);

  try {
    const { stdout, stderr } = await execAsync(`Rscript "${tempFile}"`);
    
    // Attempt to parse JSON from stdout
    try {
      const jsonResult = JSON.parse(stdout);
      return {
        content: [{ type: "text", text: JSON.stringify(jsonResult, null, 2) }],
      };
    } catch (e) {
      return {
        content: [{ type: "text", text: `Failed to parse R output JSON.\nStdout: ${stdout}\nStderr: ${stderr}` }],
        isError: true
      };
    }

  } catch (error) {
    const err = error as any;
    return {
      content: [{ type: "text", text: `Execution failed.\nError: ${err.message}\nStderr: ${err.stderr || ''}` }],
      isError: true
    };
  } finally {
    // Clean up temp file
    await unlink(tempFile).catch(() => {}); 
  }
}

// Helper: r_document implementation
async function handleRDocument(pkgPath: string) {
  const command = `Rscript -e "devtools::document('${pkgPath.replace(/'/g, "'\'")}')"`;
  try {
    const { stdout, stderr } = await execAsync(command);
    return {
      content: [{ type: "text", text: `Documentation updated.\n${stdout}` }],
    };
  } catch (error) {
     const err = error as any;
     return {
      content: [{ type: "text", text: `Failed to document.\n${err.message}\n${err.stderr || ''}` }],
      isError: true
    };
  }
}

// Start Server
async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

run().catch((error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});
