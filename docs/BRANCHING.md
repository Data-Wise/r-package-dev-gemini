# Branching Strategy for Mediationverse

## Branch Structure

### Permanent Branches

| Branch | Purpose | Protection |
|--------|---------|------------|
| `main` | Production-ready, CRAN releases | Protected, PR + CI required |
| `dev` | Integration, development | Protected, CI required |

### Temporary Branches

```
feature/descriptive-name      # New features
fix/issue-number-description  # Bug fixes
refactor/component-name       # Code refactoring
docs/topic                    # Documentation
test/coverage-area            # Test improvements
release/v0.1.0                # Release preparation
hotfix/critical-bug           # Critical fixes to main
ecosystem/feature-name        # Cross-package features
```

## Workflows

### Feature Development

```
dev → feature/name → PR → dev
```

### Bug Fixes

```
dev → fix/name → PR → dev
```

### Releases

```
dev → release/vX.Y.Z → main (tag) + merge back to dev
```

### Hotfixes

```
main → hotfix/name → main (tag) + merge to dev
```

### Cross-Package

```
dev → ecosystem/name (multiple repos) → coordinated merge
```

## Daily Commands

```bash
# Start feature
git checkout dev && git pull
git checkout -b feature/my-feature

# Sync with dev
git fetch origin && git merge origin/dev

# Create PR
git push -u origin feature/my-feature
gh pr create --base dev

# Cleanup after merge
git checkout dev && git pull
git branch -d feature/my-feature
```

## Branch Protection (GitHub)

### main

- Require PR + 1 approval
- Status checks: R-CMD-check, test-coverage ≥80%, lintr
- No force push, no delete

### dev

- Status checks: R-CMD-check, test-coverage ≥70%
- No force push, no delete

## Commit Messages

```
feat: Add SerialMediationData S7 class
fix(lavaan): Handle vcov extraction (#123)
docs: Update API contracts
test: Add edge cases
refactor: Simplify bootstrap logic
```

## Release Coordination

| Time | Package | Action |
|------|---------|--------|
| Week 1 | medfit | Release branch, finalize |
| Week 2 | medfit | CRAN/GitHub release |
| Week 3 | probmed | Update, test, release |
| Week 4 | Others | Update if needed |
| Week 5 | mediationverse | Update deps, release |
