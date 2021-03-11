# [personal-portfolio](https://htbkoo.github.io/personal-portfolio/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/htbkoo/personal-portfolio/blob/master/LICENSE.md)

Attempting to write my personal portfolio page again, this time with [`React`](https://github.com/facebook/react) + [`TypeScript`](https://github.com/Microsoft/TypeScript/)

## TODOs
5. [ ] Add `Fork me on GitHub` ribbon
7. [ ] Fix [issues mentioned in `PageSpeed`](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhtbkoo.github.io%2Fpersonal-portfolio%2F) or [`Lighthouse`](https://developers.google.com/web/tools/lighthouse), e.g.
    1. [x] Issues under `PWA` section
    2. [ ] Issues under `Performance` section
8. [ ] Improve tests
9. [ ] Refactor code, e.g.
    1. [ ] Migrate to [`React Hooks`](https://reactjs.org/docs/hooks-intro.html) for clarity wherever applicable
    2. [ ] Review components splitting / architecture wherever applicable
    3. [ ] Generic code refactoring
10. [ ] Add more section `README.md`, e.g.
    1. [ ] Quick Overview
    2. [ ] Installation
11. [ ] Re-architecture, e.g. 
    1. [ ] [Add `react-navigation` support](https://reactnavigation.org/)
    2. [ ] Try out if [`micro-frontend`](https://martinfowler.com/articles/micro-frontends.html) is a good fit for this project
12. [ ] Revamp design, e.g.
    1. [ ] Re-organize components layout, e.g. 
        1. [ ] replace `Drawer` by `navbar`?
    2. [ ] Add `Blog` / `My learning notes` section 
        1. [ ] The contents can be stored as `markdown` in GitHub repo directly? 
    3. [ ] Group pages and do not put all of them at the same page?
    4. [ ] Add animation
1. [x] Update project license
2. [x] (If applicable) merge the PRs raised by `dependabot` to fix potential security vulnerabilities
3. [x] ([#34](https://github.com/htbkoo/personal-portfolio/pull/34)) Update project dependencies, which includes:
    1. `react` + `react-dom`
    2. `typescript`
    3. `react-scripts`
    4. `material-ui`
    5. `cheerio`
    6. `react-ga`
4. [x] Fix the content at anchor hidden by header bar issue, references:
    1. [`css-tricks`](https://css-tricks.com/)
        1. [Hash Tag Links That Don’t Headbutt The Browser Window](https://css-tricks.com/hash-tag-links-padding/)
        2. [Fixed Headers, On-Page Links, and Overlapping Content, Oh My!](https://css-tricks.com/fixed-headers-on-page-links-and-overlapping-content-oh-my/)
        3. [Link in Header? Or Header in Link?](https://css-tricks.com/link-header-header-link/)
    2. [`nicolasgallagher.com`](http://nicolasgallagher.com/)
        1. [Jump links and viewport positioning](http://nicolasgallagher.com/jump-links-and-viewport-positioning/)
    3. [`stackoverflow`](https://stackoverflow.com)
        1. [Fixed page header overlaps in-page anchors](https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors)
6. [x] Add `GitHub` action to automatically:
    1. [x] Run tests for all `PRs` and `merges` into `master`
    2. [x] Build `docs/` and deploy to `gh-pages`
