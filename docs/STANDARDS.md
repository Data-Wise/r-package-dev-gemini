# Development Standards for Mediationverse

## R Package Standards

- **R Version**: >= 4.1.0 (native pipe `|>`, lambda `\(x)`)
- **Required Tools**: devtools, usethis, testthat (>= 3.0.0), roxygen2, pkgdown, rcmdcheck, covr, lintr

## Code Style

### Naming Conventions

| Type | Style | Example |
|------|-------|---------|
| Functions | snake_case | `fit_mediation()` |
| Internal functions | .dot_prefix | `.validate_inputs()` |
| S7 Classes | CamelCase | `MediationData` |
| S7 Properties | snake_case | `a_path`, `b_path` |
| Arguments | snake_case | `n_boot`, `ci_level` |
| Variables | snake_case | `boot_estimates` |

### Standard Arguments

| Concept | Name | Type |
|---------|------|------|
| Mediator model | `formula_m` | formula |
| Outcome model | `formula_y` | formula |
| Treatment | `treatment` | character |
| Mediator | `mediator` | character |
| Outcome | `outcome` | character |
| Data | `data` | data.frame |
| Bootstrap samples | `n_boot` | integer |
| Confidence level | `ci_level` | numeric |
| Method | `method` | character |
| Engine | `engine` | character |
| Verbose | `verbose` | logical |

### Formatting

- Line length: 80 chars (max 100)
- Indentation: 2 spaces
- Assignment: `<-` (not `=`)
- Pipe: Native `|>` (not magrittr `%>%`)

## S7 Design

### Class Template

```r
MyClass <- S7::new_class(
  name = "MyClass",
  package = "packagename",  # Required
  properties = list(
    required = S7::class_numeric,
    optional = S7::new_union(S7::class_numeric, S7::class_NULL)
  ),
  validator = function(self) {
    if (self@required < 0) return("must be non-negative")
    NULL
  }
)
```

### Registration (.onLoad)

```r
.onLoad <- function(libname, pkgname) {
  S7::S4_register(MyClass)
  S7::methods_register()
}
```

## Testing Standards

- Minimum coverage: 80%
- Critical paths: 100%
- Use `describe()` blocks
- Arrange-Act-Assert pattern
- Test edge cases and errors

## Documentation

### roxygen2 Template

```r
#' Short Title
#'
#' @param x Description
#' @return Description
#' @examples
#' result <- my_function(10)
#' @export
```

### Math in Docs

- roxygen2: `\eqn{a \times b}{a * b}`
- Quarto: `$a \times b$`

## Git Commits

```
type(scope): description

Types: feat, fix, docs, test, refactor, perf, style, chore, ci
```

## CI/CD Workflows

1. `R-CMD-check.yaml` - Multi-platform
2. `test-coverage.yaml` - Codecov
3. `pkgdown.yaml` - Website
4. `lint.yaml` - Code style

## CRAN Checklist

- [ ] `R CMD check --as-cran` passes (0 E/W/N)
- [ ] Examples < 5 seconds
- [ ] Vignettes < 5 seconds
- [ ] All fields in DESCRIPTION
- [ ] Coverage ≥ 80%
- [ ] spell_check_package() clean
