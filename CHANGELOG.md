# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-04

### Added

#### Commands (20 total)

- **Setup & Planning**
  - `/r-init` - Create development plan for new packages
  - `/r-onboard` - Analyze existing packages, identify gaps
  - `/r-resume` - Resume work from session logs
  - `/r-save` - Save progress before quitting
  - `/r-learn` - Update knowledge with optimization
  - `/r-usethis` - Run usethis setup commands
  - `/r-git` - Branch management with pre-push checks

- **Code Quality**
  - `/r-check` - Run `devtools::check()`
  - `/r-review` - Code review for CRAN, S7, style
  - `/r-fix` - Auto-fix issues
  - `/r-lint` - Tidyverse linting

- **Code Development**
  - `/r-s7` - S7 classes and methods
  - `/r-docs` - roxygen2 + `devtools::document()`
  - `/r-test` - Create tests + `devtools::test()`

- **Documentation & Website**
  - `/r-readme` - README with mediationverse badges
  - `/r-news` - NEWS.md with ecosystem notes
  - `/r-pkgdown` - Build pkgdown site
  - `/r-actions` - GitHub Actions workflows
  - `/r-ci` - Check workflow status, diagnose errors

- **Release**
  - `/r-cran` - CRAN submission checklist

#### Reference Documents (8 total)

- `docs/STANDARDS.md` - Development standards
- `docs/BADGES.md` - Badge order and templates
- `docs/README_TEMPLATE.md` - README structure
- `docs/NEWS_TEMPLATE.md` - NEWS.md format
- `docs/BRANCHING.md` - Git branch strategy
- `docs/LEARNINGS.md` - Captured knowledge
- `docs/LEARNINGS_TEMPLATE.md` - Project learnings template
- `docs/GEMINI_TEMPLATE.md` - Project GEMINI.md template

### Features

- devtools-based workflow (`devtools::check()`, `devtools::document()`, `devtools::test()`)
- Session management with `/r-save` and `/r-resume`
- Knowledge management with before/after optimization
- Pre-push checklist (check, build site, preview)
- Mediationverse ecosystem support with standardized templates
