# R Package Development Learnings

Knowledge captured from R package development sessions.

## Patterns

### S7 Registration

- Always register S7 classes in `.onLoad()` with `S7::S4_register()`
- Register methods with `S7::methods_register()`
- For optional dependencies (Suggests), register conditionally:

  ```r
  if (requireNamespace("lavaan", quietly = TRUE)) {
    .register_lavaan_method()
  }
  ```

### Gemini Extensions

- **Local Development**: Extensions must be symlinked to `~/.gemini/extensions/` to be loaded.
  ```bash
  ln -s /path/to/my-extension ~/.gemini/extensions/my-extension
  ```
- **MCP Servers**: Require a restart of the Gemini CLI to load new MCP server configurations.

### checkmate Validation

- Use `checkmate::assert_*` functions for input validation
- Common assertions: `assert_number()`, `assert_string()`, `assert_flag()`
- Add `null.ok = TRUE` for optional parameters

## Workarounds

### gh-pages Branch Conflict

- **Issue**: "fatal: A branch named 'gh-pages' already exists"
- **Fix**: Use `clean: false` in JamesIves/github-pages-deploy-action

  ```yaml
  - uses: JamesIves/github-pages-deploy-action@v4
    with:
      clean: false
      branch: gh-pages
      folder: docs
  ```

### polyfill.io Defunct

- **Issue**: pkgdown sites not loading due to polyfill.io being defunct
- **Fix**: Remove polyfill.io scripts from `_pkgdown.yml` template

### Quarto Vignettes in CI

- **Issue**: "Quarto not found" during R CMD check
- **Fix**: Add quarto setup step before check:

  ```yaml
  - uses: quarto-dev/quarto-actions/setup@v2
  ```

## Tips

### devtools Workflow

```r
devtools::load_all()    # Load package
devtools::document()    # Generate docs
devtools::test()        # Run tests
devtools::check()       # Full check
```

### Pre-push Checklist

1. `devtools::check()` - must pass
2. `pkgdown::build_site()` - build website
3. `pkgdown::preview_site()` - verify visually

## Gotchas

### R CMD check from Wrong Directory

- **Wrong**: Running check from package root
- **Right**: Run from parent directory on the package folder

### Missing @importFrom

- S7 and checkmate functions need explicit imports
- Add to `R/aaa-imports.R`:

  ```r
  #' @import S7
  #' @importFrom checkmate assert_number assert_string
  NULL
  ```

## MCP Server Issues

### Connection Closed Error

- **Issue**: MCP server starts, but Gemini CLI reports "Connection closed" (Error -32000).
- **Diagnosis**: The server likely exits prematurely or fails to communicate over `stdin`/`stdout` during the initial JSON-RPC handshake.
- **Troubleshooting**:
    - Ensure `dist/index.js` accurately reflects `src/index.ts` (rebuild after changes).
    - Add extensive logging to `src/index.ts` to pinpoint exact failure points during startup and handshake.
    - Test server manually with a full JSON-RPC handshake to capture raw error output (e.g., redirect `stderr`).