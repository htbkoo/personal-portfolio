# The Twelve-Factor App

A methodology for building `software-as-a-service` apps (aka `web apps`)

###### Reference

1. [The Twelve-Factor App](https://12factor.net/)
2. [The 12-Factor App Methodology Explained](https://www.bmc.com/blogs/twelve-factor-app/)

## Introduction

- nowadays, software is commonly delivered as a service, i.e. `web apps` or `software-as-a-service`
- `twelve-factor app` is a methodology for build such apps that:
    - use **declarative** formats for setup automation, to minimize time and cost for new developers joining the project
    - have a **clean contract** with the underlying operating system, offering **maximum portability** between execution environments
    - suitable for **deployment** on modern **cloud platforms**, removing the need for servers and system administration
    - **minimize divergence** between development and production, enabling **continuous deployment** for maximum agility
    - can **scale up** without significant changes to tooling, architecture, or development practices.
- applicable to apps written in **any programming languages**, and which use **any combination of backing services** (
  database, queue, memory cache, etc)

## List

1. [**Codebase**]() - one codebase tracked in revision control, many deploys
2. [**Dependencies**]() - explicitly declare and isolate dependencies
3. [**Config**]() - store config in the environment
4. [**Backing services**]() - treat backing services as attached resources
5. [**Build, release, run**]() - strictly separate build and run stages
6. [**Processes**]() - execute the app as one or more stateless processes
7. [**Port binding**]() - export services via port binding
8. [**Concurrency**]() - scale out via the process model
9. [**Disposability**]() - maximize robustness with fast startup and graceful shutdown
10. [**Dev/prod partiy**]() - keep development, staging, and production as similar as possible
11. [**Logs**]() - treat logs as event streams
12. [**Admin processes**]() - run admin / management task as one-off processes 
