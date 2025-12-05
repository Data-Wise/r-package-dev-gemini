# Standard Badges for Mediationverse Packages

## Standard Badge Order

All mediationverse packages should use badges in this order:

1. **Lifecycle** - Development stage
2. **Repo Status** - Repository activity status
3. **R-CMD-check** - Build status
4. **Website Status** (pkgdown) - Documentation build
5. **R-hub** - Multi-platform testing
6. **Codecov** - Code coverage
7. **CRAN status** - Only if package is on CRAN

## Badge Templates

### For Packages NOT on CRAN

```markdown
<!-- badges: start -->
[![Lifecycle: {status}](https://img.shields.io/badge/lifecycle-{status}-{color}.svg)](https://lifecycle.r-lib.org/articles/stages.html#{status})
[![Repo Status](https://www.repostatus.org/badges/latest/{repostatus}.svg)](https://www.repostatus.org/#{repostatus})
[![R-CMD-check](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml)
[![Website Status](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml)
[![R-hub](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml)
[![Codecov](https://codecov.io/gh/data-wise/{package}/graph/badge.svg)](https://codecov.io/gh/data-wise/{package})
<!-- badges: end -->
```

### For Packages ON CRAN

```markdown
<!-- badges: start -->
[![CRAN status](https://www.r-pkg.org/badges/version/{package})](https://CRAN.R-project.org/package={package})
[![Lifecycle: stable](https://img.shields.io/badge/lifecycle-stable-brightgreen.svg)](https://lifecycle.r-lib.org/articles/stages.html#stable)
[![R-CMD-check](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml)
[![Website Status](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml)
[![R-hub](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml)
[![Codecov](https://codecov.io/gh/data-wise/{package}/graph/badge.svg)](https://codecov.io/gh/data-wise/{package})
<!-- badges: end -->
```

## Badge Options

### Lifecycle Status

| Status | Color | When to Use |
|--------|-------|-------------|
| `experimental` | orange | Active development, API may change |
| `stable` | brightgreen | Production-ready, stable API |
| `superseded` | blue | Replaced by newer package |
| `deprecated` | orange | No longer recommended |

### Repo Status

| Status | When to Use |
|--------|-------------|
| `wip` | Work in Progress, not ready for use |
| `active` | Active development and maintenance |
| `inactive` | No active development but maintained |
| `unsupported` | No longer maintained |

## Mediationverse Package Badges

| Package | Lifecycle | Repo Status | On CRAN |
|---------|-----------|-------------|---------|
| medfit | experimental | wip | No |
| probmed | stable | active | No |
| RMediation | stable | - | Yes |
| medrobust | experimental | wip | No |
| medsim | experimental | wip | No |
| mediationverse | experimental | wip | No |

## Required GitHub Actions Workflows

1. **R-CMD-check.yaml** - Standard R package check
2. **pkgdown.yaml** - Build and deploy documentation website
3. **rhub.yaml** - Multi-platform testing via R-hub
4. **test-coverage.yaml** - Upload coverage to Codecov
