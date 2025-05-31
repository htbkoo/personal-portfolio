# Inference

Learn common techniques to scale inference in production environments.

<!-- TOC -->
* [Inference](#inference)
  * [Inference](#inference-1)
    * [1. Imbalance workload](#1-imbalance-workload)
      * [Serving logics and multiple models](#serving-logics-and-multiple-models)
  * [2. Non-stationary problem](#2-non-stationary-problem)
  * [3. Exploration vs exploitation: Thompson Sampling](#3-exploration-vs-exploitation-thompson-sampling)
<!-- TOC -->

## Inference

- used trained model to make predictions

### 1. Imbalance workload

- split workload into multiple inference servers
    - use similar architecture in load balancers
    - also called Aggregator Service
- process:
    - client (upstream service) sends request to Aggregator Service
    - if workload is too high, Aggregator Service splits workload and sends to workers in Worker Pool
    - pick worker based on:
        - workload
        - round-robin
        - request parameter
    - wait for response from workers
    - forward response to client
  
#### Serving logics and multiple models

- for any business-driven system, important to be able to change logic in service models
- e.g. for Ad Prediction system
    - depending on type of ad candidates, route to different model to get score

## 2. Non-stationary problem

- in online setting, data always changing
- data distribution shifts is common
- crucial to keep models fresh to achieve sustained performance
- decide how often to update / retrain models based on how frequently models performance degrades
- one common algorithm: Bayesian Logistic Regression

## 3. Exploration vs exploitation: Thompson Sampling

- in Ad Click prediction use case, beneficial to allow some exploration when recommending new ads
    - but too few ad conversions = low revenue
- known as exploration vs exploitation trade-off
- one common technique: Thompson Sampling
    - decide which action based on reward at a time (t)
