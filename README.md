# [personal-portfolio](https://htbkoo.github.io/personal-portfolio/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/htbkoo/personal-portfolio/blob/master/LICENSE.md)

Attempting to write my personal portfolio page again, this time with [`React`](https://github.com/facebook/react) + [`TypeScript`](https://github.com/Microsoft/TypeScript/)

## Getting Started

###### Copied from the `README.md` from the [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio page.

## Other information

### Major updates
1. [`v5.0.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v5.0.0) - Another major re-architecture - now the [`<DrawerItems />`](src%2Fcomponents%2Fpage%2FDrawerItems.tsx) supports `subPages` and `Exercises` (formerly `Portfolio` page) are split into their own page for faster loading performance
2. [`v4.0.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v4.0.0) - upgraded [`material-ui`](https://mui.com/material-ui/migration/migration-v4/) to `v5` ([#178](https://github.com/htbkoo/personal-portfolio/pull/178))
3. [`v3.0.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v3.0.0) - upgraded [`next.js`](https://nextjs.org/) to `v14` ([#175](https://github.com/htbkoo/personal-portfolio/pull/175))
4. [`v2.0.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v2.0.0) - upgraded [`next.js`](https://nextjs.org/) to `v13` ([#143](https://github.com/htbkoo/personal-portfolio/pull/143))
5. [`v1.0.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v1.0.0) - revamped architecture (split pages so the [First Contentful Paint (FCP) ](https://web.dev/fcp/) and [Largest Contentful Paint (LCP) ](https://web.dev/lcp/) would be quicker) and improved UX, e.g. by reducing [Time-To-Interactive (TTI)](https://web.dev/interactive/) and [Total-Blocking-Time (TBT)](https://web.dev/tbt/) ([#112](https://github.com/htbkoo/personal-portfolio/pull/112)) 
6. [`v0.10.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v0.10.0) - migrated to [`Next.js`](https://nextjs.org/) from [`Create React App`](https://create-react-app.dev/)
   1. As a bonus, the version of `React` is also upgraded to [`v18.0`](https://reactjs.org/blog/2022/03/29/react-v18.html) from `v17.0.2`

### Common known issues

#### Windows compatibility

##### The `yarn start` and `yarn build` does not work on Windows machine

###### TL;DR solution
Set the `yarn` / `npm` `script-shell` to `bash` (recommended) or `powershell` by running:
1. For `yarn`, `yarn config set script-shell bash`
2. For `npm`, configure the `script-shell` value at `.npmrc`

###### Explanation
This is because, according to [the issue described here at `cross-env`](https://github.com/kentcdodds/cross-env#windows-issues), `npm uses cmd by default and that doesn't support command substitution, so if you want to leverage that, then you need to update your .npmrc to set the script-shell to powershell. Learn more here.`

###### Reference
1. https://stackoverflow.com/questions/65953667/yarn-cant-run-any-script
2. https://classic.yarnpkg.com/lang/en/docs/yarnrc/
3. https://github.com/kentcdodds/cross-env/issues/192#issuecomment-513341729
4. https://github.com/kentcdodds/cross-env#windows-issues 
