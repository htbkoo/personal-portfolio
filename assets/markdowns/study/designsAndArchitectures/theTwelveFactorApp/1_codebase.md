# [The Twelve-Factor App - I: Codebase](https://12factor.net/codebase)

One Codebase tracked in revision control, many deploys

## Details

- a 12-factor app is always tracked in a version control system
    - copy of the revision tracking database = `code repository` = `code repo` = `repo`
- `codebase` = any single `repo` (in centralized revision control system) or any set of repos who share a root commit (in decentralized revision control system)
- always 1-to-1 correlation between codebase and app
    - multiple codebases mean it is not an app, but a distributed system 
        - each component in a distributed system is an app and can individually be a 12-factor app
    - multiple apps sharing same code is violation of 12-factor
        - solution is to factor shared code into libraries which can be included through [`dependency manager`]()
- there will be many deploys of the app
    - `deploy` = running instance of the app
    - e.g. a production site + one or more staging sites + one local dev env per developer
- same codebase across all deploys
    - different versions may be active in each deploy
