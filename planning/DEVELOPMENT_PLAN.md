# Extension Development Plan

**Created**: 2024-12-04
**Version**: 1.0.0
**Status**: Ready for release

## Completed Features

### Phase 1: Core Commands ✅

- [x] `/r-check` - devtools::check()
- [x] `/r-docs` - devtools::document()
- [x] `/r-test` - devtools::test()
- [x] `/r-lint` - Linting
- [x] `/r-fix` - Auto-fix
- [x] `/r-review` - Code review
- [x] `/r-s7` - S7 OOP
- [x] `/r-cran` - CRAN prep

### Phase 2: Setup Commands ✅

- [x] `/r-init` - New package setup
- [x] `/r-onboard` - Existing package analysis
- [x] `/r-usethis` - usethis commands
- [x] `/r-git` - Branch management

### Phase 3: Documentation Commands ✅

- [x] `/r-readme` - README with badges
- [x] `/r-news` - NEWS.md
- [x] `/r-pkgdown` - Website
- [x] `/r-actions` - GitHub Actions
- [x] `/r-ci` - Workflow status

### Phase 4: Session Management ✅

- [x] `/r-save` - Save progress
- [x] `/r-resume` - Resume work
- [x] `/r-learn` - Knowledge management

### Phase 5: Reference Documents ✅

- [x] STANDARDS.md
- [x] BADGES.md
- [x] README_TEMPLATE.md
- [x] NEWS_TEMPLATE.md
- [x] BRANCHING.md
- [x] LEARNINGS.md
- [x] LEARNINGS_TEMPLATE.md
- [x] GEMINI_TEMPLATE.md

## Future Enhancements

### v1.1.0 (Planned)

- [ ] `/r-vignette` - Create Quarto vignettes
- [ ] `/r-deps` - Dependency management
- [ ] `/r-release` - Automated release workflow

### v1.2.0 (Planned)

- [ ] `/r-benchmark` - Performance benchmarking
- [ ] `/r-profile` - Profiling support
- [ ] Integration with RStudio/Positron

## Release Checklist

- [x] All commands implemented
- [x] All docs created
- [x] LICENSE added
- [x] CHANGELOG added
- [x] Git initialized
- [x] GitHub repo created
- [x] Tagged v1.0.0
- [x] README updated with install instructions

## Phase 2: Hybrid MCP Architecture (Current Focus)

Moving from "Shell-based" to "Tool-based" architecture for higher reliability.

### MCP Server Scaffold
- [x] Initialize `mcp-server/` directory
- [x] Create Node.js-based MCP server (`index.ts`)
- [ ] Implement `r_check` tool (wraps `rcmdcheck` or `devtools::check`)
- [ ] Implement `r_get_description` resource

### Integration
- [x] Register `r-package-dev` MCP server in Gemini config
- [ ] Refactor `commands/r-check.toml` to use the `r_check` tool
- [ ] Refactor `commands/r-docs.toml` to use `r_document` tool
