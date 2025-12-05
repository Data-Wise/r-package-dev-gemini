# R Package Development Extension

Expert assistant for R package development using modern best practices.

## Core Expertise

- **S7 OOP**: Classes, generics, methods, validation
- **Development**: `devtools`, `usethis`, `roxygen2`
- **Testing**: `testthat` edition 3, `checkmate` defensive programming
- **Documentation**: `pkgdown` sites, Quarto vignettes
- **CI/CD**: GitHub Actions, `devtools::check()`
- **Style**: `lintr` with tidyverse guidelines

## Commands (20 total)

### Setup & Planning

| Command | Use When |
|---------|----------|
| `/r-init` | **New package** - Create development plan from scratch |
| `/r-onboard` | **Existing package** - Analyze structure, identify gaps |
| `/r-resume` | Resume previous work by reading session logs |
| `/r-save` | Save progress, update planning docs before quitting |
| `/r-learn` | Update knowledge, memorize patterns (extension or project level) |
| `/r-usethis` | Running usethis setup commands |
| `/r-git` | Managing branches with pre-push checks |

### Code Quality

| Command | Use When |
|---------|----------|
| `/r-check` | Running `devtools::check()` and fixing issues |
| `/r-review` | Reviewing code for CRAN compliance and best practices |
| `/r-fix` | Auto-fixing R CMD check issues and lint violations |
| `/r-lint` | Linting code with tidyverse style rules |

### Code Development

| Command | Use When |
|---------|----------|
| `/r-s7` | Creating or refactoring S7 classes and methods |
| `/r-docs` | Generating roxygen2 docs + `devtools::document()` |
| `/r-test` | Creating tests + running `devtools::test()` |

### Documentation & Website

| Command | Use When |
|---------|----------|
| `/r-readme` | Creating README.md with mediationverse template |
| `/r-news` | Creating/updating NEWS.md with ecosystem notes |
| `/r-pkgdown` | Building pkgdown websites and troubleshooting |
| `/r-actions` | Creating or fixing GitHub Actions workflows |
| `/r-ci` | Checking workflow status, diagnosing errors, researching fixes |

### Release

| Command | Use When |
|---------|----------|
| `/r-cran` | Preparing for CRAN submission |

## Key devtools Workflow

```r
devtools::load_all()    # Load package
devtools::document()    # Generate docs
devtools::test()        # Run tests
devtools::check()       # R CMD check
```

## Key Principles

1. **Defensive Programming**: Use `checkmate` for input validation
2. **CRAN Compliance**: Use `devtools::check(cran = TRUE)`
3. **Tidyverse Style**: Follow tidyverse style guide with `lintr`
4. **S7 Patterns**: Use S7 for modern OOP with proper validation
5. **Test First**: Create tests before running `devtools::test()`

## Mediationverse Standards

For `data-wise` ecosystem packages, follow standardized templates:

- **Development Standards**: See `docs/STANDARDS.md`
- **Badge Order**: Lifecycle → Repo Status → R-CMD-check → pkgdown → R-hub → Codecov → CRAN
- **README Template**: See `docs/README_TEMPLATE.md`
- **Badge Reference**: See `docs/BADGES.md`
- **NEWS Template**: See `docs/NEWS_TEMPLATE.md`
- **Branching Strategy**: See `docs/BRANCHING.md`
- **Learnings**: See `docs/LEARNINGS.md` (edit directly!)
- **Learnings Template**: See `docs/LEARNINGS_TEMPLATE.md`
- **GEMINI.md Template**: See `docs/GEMINI_TEMPLATE.md` (for project context)

### Packages

| Package | Type | Lifecycle | On CRAN |
|---------|------|-----------|---------|
| medfit | Core | experimental | No |
| probmed | Application | stable | No |
| RMediation | Application | stable | Yes |
| medrobust | Application | experimental | No |
| medsim | Support | experimental | No |
| mediationverse | Meta | experimental | No |
