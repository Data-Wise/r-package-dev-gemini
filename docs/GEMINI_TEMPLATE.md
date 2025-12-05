# GEMINI.md Template

Templates for project-level and extension-level GEMINI.md files.

## Project-Level GEMINI.md

Save as `GEMINI.md` in your package root.

```markdown
# {Package Name}

{Brief package description - what it does and who it's for.}

## Quick Reference

### Key Commands
```bash
devtools::load_all()    # Load package
devtools::test()        # Run tests
devtools::check()       # Full check
pkgdown::build_site()   # Build website
```

### Package Structure

- `R/` - Source code
- `tests/testthat/` - Tests
- `vignettes/` - Documentation
- `planning/` - Development docs

## Project-Specific Context

### Architecture

- {Key architectural decision 1}
- {Key architectural decision 2}

### Conventions

- {Naming convention}
- {Code style preference}
- {Testing approach}

### Dependencies

- **{dep1}**: {why used}
- **{dep2}**: {why used}

### Known Issues

- {Issue 1}: {status/workaround}

## Current Focus

### Active Work

- {What's currently being developed}

### Blockers

- {Any blockers}

### Next Steps

1. {Priority 1}
2. {Priority 2}

## Team Notes

- {Team-specific information}
- {Communication preferences}

```

## Extension-Level GEMINI.md

The extension GEMINI.md (`~/.gemini/extensions/r-package-dev/GEMINI.md`) contains:
- Core expertise areas
- Available commands with descriptions
- Key principles
- Reference document links

## How to Edit

### Edit Project GEMINI.md
```bash
# Create if doesn't exist
touch GEMINI.md

# Edit with your editor
code GEMINI.md
vim GEMINI.md
open GEMINI.md
```

### Edit Extension GEMINI.md

```bash
# View extension GEMINI.md
cat ~/.gemini/extensions/r-package-dev/GEMINI.md

# Edit extension GEMINI.md
code ~/.gemini/extensions/r-package-dev/GEMINI.md
vim ~/.gemini/extensions/r-package-dev/GEMINI.md
```

## Best Practices

1. **Keep it concise** - Gemini works better with focused, relevant context
2. **Update regularly** - Remove outdated info, add new learnings
3. **Use headers** - Structure helps Gemini find relevant info
4. **Be specific** - Concrete examples are better than vague guidelines
5. **Link to docs** - Reference detailed docs rather than duplicating

## Optimization Tips

After editing knowledge files, the agent will:

1. Review for redundancy
2. Remove outdated information
3. Consolidate similar entries
4. Ensure consistent formatting
5. Prioritize actionable knowledge
