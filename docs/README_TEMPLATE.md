# README Template for Mediationverse Packages

## Template

```markdown
# {package}: {tagline}

<!-- badges: start -->
[![Lifecycle: {status}](https://img.shields.io/badge/lifecycle-{status}-{color}.svg)](https://lifecycle.r-lib.org/articles/stages.html#{status})
[![Repo Status](https://www.repostatus.org/badges/latest/{repostatus}.svg)](https://www.repostatus.org/#{repostatus})
[![R-CMD-check](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/R-CMD-check.yaml)
[![Website Status](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/pkgdown.yaml)
[![R-hub](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml/badge.svg)](https://github.com/data-wise/{package}/actions/workflows/rhub.yaml)
[![Codecov](https://codecov.io/gh/data-wise/{package}/graph/badge.svg)](https://codecov.io/gh/data-wise/{package})
<!-- badges: end -->

{Brief 1-2 sentence description of what the package does.}

## Mediationverse Ecosystem

**{package}** is part of the **mediationverse** ecosystem for mediation analysis in R:

| Package | Purpose | Status |
|---------|---------|--------|
| [**medfit**](https://github.com/data-wise/medfit) | Foundation: model fitting, extraction, bootstrap | Core |
| [**probmed**](https://github.com/data-wise/probmed) | Probabilistic effect size (P_med) | Application |
| [**RMediation**](https://github.com/data-wise/rmediation) | Confidence intervals (DOP, MBCO) | Application |
| [**medrobust**](https://github.com/data-wise/medrobust) | Sensitivity analysis | Application |
| [**medsim**](https://github.com/data-wise/medsim) | Simulation infrastructure | Support |

> This package builds on **medfit** for model infrastructure and bootstrap inference.

## Installation

\```r
# Install from CRAN (when available)
install.packages("{package}")

# Install development version from GitHub
# install.packages("remotes")
remotes::install_github("data-wise/{package}")
\```

## Quick Start

\```r
library({package})

# {Package-specific example code}
\```

## Features

- {Feature 1}
- {Feature 2}
- {Feature 3}

## Documentation

- [Getting Started](https://data-wise.github.io/{package}/articles/getting-started)
- [Full Documentation](https://data-wise.github.io/{package}/)
- [Function Reference](https://data-wise.github.io/{package}/reference/)

## Compatibility

- **R version**: >= 4.1.0
- **medfit**: >= {version} (for dependent packages)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Citation

If you use {package} in your research, please cite:

\```
@software{{package},
  author = {{Author Name}},
  title = {{{package}: {Title}}},
  year = {{Year}},
  url = {{https://github.com/data-wise/{package}}}
}
\```

## License

MIT (c) {Year} {Author}
```

## Placeholders

| Placeholder | Description |
|-------------|-------------|
| `{package}` | Package name (lowercase) |
| `{tagline}` | Short description (e.g., "Probabilistic Mediation Effects") |
| `{status}` | Lifecycle: experimental, stable, deprecated |
| `{color}` | Badge color: orange, brightgreen, blue |
| `{repostatus}` | Repo status: wip, active, inactive |
| `{version}` | Minimum required medfit version |
| `{Year}` | Current year |
| `{Author}` | Package author |

## Package Types

| Type | Packages | Notes |
|------|----------|-------|
| Foundation | medfit | No dependency section |
| Application | probmed, RMediation, medrobust | Include medfit dependency |
| Support | medsim | Emphasize HPC, simulation |
| Meta | mediationverse | Load all packages |
