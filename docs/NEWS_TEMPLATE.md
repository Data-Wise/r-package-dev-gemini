# NEWS Template for Mediationverse Packages

## Version Sections

```markdown
# {package} (development version)  <- Always at top, for unreleased changes

# {package} 1.2.3 (2025-06-15)     <- Released versions, newest first

# {package} 1.2.2 (2025-03-01)     <- Older releases below
```

## Standard Sections

### Breaking Changes

```markdown
## Breaking Changes

- `old_function()` has been removed. Use `new_function()` instead.
  - Migration: Replace `old_function(x)` with `new_function(x, default = TRUE)`
  - Ecosystem: probmed/RMediation updated in v{X.Y.Z}
```

### New Features

```markdown
## New Features

- Added `new_function()` for {purpose} (#issue_number)
- `existing_function()` gains new argument `option` for {purpose}
```

### Bug Fixes

```markdown
## Bug Fixes

- Fixed edge case in `function()` when input is NULL (#issue_number)
- `function()` now correctly handles negative values (#issue_number)
```

### Documentation

```markdown
## Documentation

- New vignette: "Getting Started with {package}"
- Improved examples in `?function`
```

### Internal

```markdown
## Internal

- Refactored internal helper functions
- Improved test coverage to {X}%
```

### Ecosystem Notes

```markdown
## Ecosystem Notes

- Tested with medfit v{X.Y.Z}
- Compatible with probmed >= {X.Y.Z}
```

## Breaking Change Format

Always include:

1. What changed
2. Why it changed (briefly)
3. How to migrate
4. Ecosystem impact (if any)

## Issue References

- `(#123)` - Same repo
- `(data-wise/medfit#45)` - Cross-repo

## Commit Type Mapping

| Commit Type | NEWS Section |
|-------------|--------------|
| `feat:` | New Features |
| `fix:` | Bug Fixes |
| `BREAKING CHANGE:` | Breaking Changes |
| `docs:` | Documentation |
| `refactor:` | Internal |
