# Project Learnings Template

Use this template for project-level learnings (`planning/LEARNINGS.md`).

## Template

```markdown
# {Package Name} Project Learnings

**Last Updated**: {date}

## Architecture Decisions

Record important design choices and their rationale.

### {Decision Title}
- **Decision**: {what was decided}
- **Alternatives**: {options considered}
- **Rationale**: {why this choice}
- **Date**: {YYYY-MM-DD}
- **Impact**: {affected areas}

## Conventions

Project-specific conventions beyond standard R practices.

### Code
- {convention 1}
- {convention 2}

### Naming
- {naming convention}

### Testing
- {testing convention}

## Workarounds

Project-specific fixes or temporary solutions.

### {Issue Title}
- **Issue**: {problem description}
- **Cause**: {root cause if known}
- **Fix**: {workaround applied}
- **Permanent fix**: {planned resolution, if any}

## Gotchas

Project-specific traps to avoid.

- **{Gotcha}**: {why it's a problem and how to avoid}

## Dependencies

Notes about key dependencies.

### {Dependency Name}
- **Version**: {version used}
- **Why**: {reason for dependency}
- **Notes**: {any special considerations}

## API Notes

Notes about external APIs or integrations.

- {API note}

## Performance

Performance considerations and optimizations.

- {performance note}
```

## Where to Save

| Scope | Location | When to Use |
|-------|----------|-------------|
| Project-level | `planning/LEARNINGS.md` | Project-specific knowledge |
| Extension-level | Extension `docs/LEARNINGS.md` | General R package knowledge |

## How to Edit Directly

### Project Learnings

```bash
# Edit project learnings
open planning/LEARNINGS.md

# Or with your editor
code planning/LEARNINGS.md
vim planning/LEARNINGS.md
```

### Extension Learnings

```bash
# Edit extension learnings (applies to all R packages)
open ~/.gemini/extensions/r-package-dev/docs/LEARNINGS.md
```

## Quick Add Examples

### Add a decision

```markdown
### Use S7 Instead of R6
- **Decision**: Use S7 for all new OOP code
- **Alternatives**: R6, S4, Reference Classes
- **Rationale**: S7 is modern, validated, and CRAN-friendly
- **Date**: 2025-12-04
```

### Add a workaround

```markdown
### lavaan vcov Dimension Mismatch
- **Issue**: vcov extraction fails with constraints
- **Fix**: Check dimensions and pad/trim as needed
- **Permanent fix**: Upstream lavaan fix pending
```

### Add a convention

```markdown
## Conventions
- Treatment variable always named `X`
- Mediator variable always named `M`
- Bootstrap default: 5000 iterations
```
