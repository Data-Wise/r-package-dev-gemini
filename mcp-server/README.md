# R Package Dev - MCP Server

This server exposes R development capabilities as **Model Context Protocol (MCP)** tools. It acts as a robust bridge between the Gemini CLI agent and the R toolchain, providing structured outputs instead of raw shell text.

## Features (Planned)

- **`r_check`**: Runs `devtools::check()` and returns structured JSON (Errors/Warnings/Notes).
- **`r_document`**: Runs `devtools::document()`.
- **`r_test`**: Runs `devtools::test()` and returns failure details.
- **`read_description`**: Resource that parses the `DESCRIPTION` file into JSON.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the server:
   ```bash
   python server.py
   ```
