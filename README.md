# [personal-portfolio](https://htbkoo.github.io/personal-portfolio/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/htbkoo/personal-portfolio/blob/master/LICENSE.md)

Attempting to write my personal portfolio page again, this time with [`React`](https://github.com/facebook/react) + [`TypeScript`](https://github.com/Microsoft/TypeScript/)

### Major updates
1. [`v0.10.0`](https://github.com/htbkoo/personal-portfolio/releases/tag/v0.10.0) - migrated to [`Next.js`](https://nextjs.org/) from [`Create React App`](https://create-react-app.dev/)
   1. As a bonus, the version of `React` is also upgraded to [`v18.0`](https://reactjs.org/blog/2022/03/29/react-v18.html) from `v17.0.2`

### Common known issues

#### Windows compatibility

##### The `yarn run dev`, `yarn start` and `yarn build` does not work on Windows machine

###### TL;DR solution
Set the `yarn` / `npm` `script-shell` to `bash` (recommended) or `powershell` by running:
1. For `yarn`, `yarn config set script-shell bash`
1. For `npm`, configure the `script-shell` value at `.npmrc`

###### Explanation
This is because, according to [the issue described here at `cross-env`](https://github.com/kentcdodds/cross-env#windows-issues), `npm uses cmd by default and that doesn't support command substitution, so if you want to leverage that, then you need to update your .npmrc to set the script-shell to powershell. Learn more here.`

###### Reference
1. https://stackoverflow.com/questions/65953667/yarn-cant-run-any-script
2. https://classic.yarnpkg.com/lang/en/docs/yarnrc/
3. https://github.com/kentcdodds/cross-env/issues/192#issuecomment-513341729
4. https://github.com/kentcdodds/cross-env#windows-issues 
