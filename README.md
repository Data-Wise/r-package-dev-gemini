# R Package Development Extension for Gemini CLI

Expert R package development with S7, devtools, and CRAN best practices.

## Installation

### From GitHub (Recommended)

```bash
gemini extensions install https://github.com/data-wise/r-package-dev-gemini
```

### From Local Directory

```bash
gemini extensions install /path/to/r-package-dev
```

### Enable the Extension

Add to `~/.gemini/extensions/extension-enablement.json`:

```json
{
  "r-package-dev": {
    "overrides": ["*"]
  }
}
```

Restart gemini after enabling.

## Quick Start

```bash
/r-init      # New package
/r-onboard   # Existing package
/r-resume    # Continue previous work
```

## Commands (20)

### Setup & Planning

| Command | Description |
|---------|-------------|
| `/r-init` | New package with development plan |
| `/r-onboard` | Analyze existing package |
| `/r-resume` | Resume from session logs |
| `/r-save` | Save progress before quitting |
| `/r-learn` | Update knowledge |
| `/r-usethis` | Run usethis commands |
| `/r-git` | Branch management |

### Code Quality

| Command | Description |
|---------|-------------|
| `/r-check` | `devtools::check()` |
| `/r-review` | Code review |
| `/r-fix` | Auto-fix issues |
| `/r-lint` | Tidyverse linting |

### Code Development

| Command | Description |
|---------|-------------|
| `/r-s7` | S7 classes/methods |
| `/r-docs` | `devtools::document()` |
| `/r-test` | `devtools::test()` |

### Documentation & Website

| Command | Description |
|---------|-------------|
| `/r-readme` | README with badges |
| `/r-news` | NEWS.md |
| `/r-pkgdown` | Build website |
| `/r-actions` | GitHub Actions |
| `/r-ci` | Check workflow status |

### Release

| Command | Description |
|---------|-------------|
| `/r-cran` | CRAN submission |

## Reference Documents

Located in `docs/`:

- `STANDARDS.md` - Development standards
- `BADGES.md` - Badge templates
- `README_TEMPLATE.md` - README structure
- `NEWS_TEMPLATE.md` - NEWS format
- `BRANCHING.md` - Git strategy
- `LEARNINGS.md` - Captured knowledge
- `LEARNINGS_TEMPLATE.md` - Project template
- `GEMINI_TEMPLATE.md` - GEMINI.md template

## Edit Knowledge Directly

```bash
# Extension-level (all projects)
open ~/.gemini/extensions/r-package-dev/docs/LEARNINGS.md

# Project-level
open planning/LEARNINGS.md
```

## Key devtools Workflow

```r
devtools::load_all()    # Load
devtools::document()    # Docs
devtools::test()        # Test
devtools::check()       # Check
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Apache 2.0 - See [LICENSE](LICENSE)
