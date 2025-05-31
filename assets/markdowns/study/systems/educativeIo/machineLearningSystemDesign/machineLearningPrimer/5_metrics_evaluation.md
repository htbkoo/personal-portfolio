# Metrics Evaluation

Learn different metrics to evaluate machine learning models

<!-- TOC -->
* [Metrics Evaluation](#metrics-evaluation)
  * [Metrics Evaluation](#metrics-evaluation-1)
    * [Offline metrics](#offline-metrics)
    * [Online metrics](#online-metrics)
<!-- TOC -->

## Metrics Evaluation

- common that models perform well in offline evaluation but poorly in production
- needs to measure model performance both in production and offline

### Offline metrics

- use metrics to measure goodness of fit:
    - logloss
    - MAE
    - R2  
- next step = staging/sandbox environment (small % of real traffic) 

### Online metrics

- during staging: 
    - measure certain metrics (e.g. Lift in revenue or click-through rate) -> how well model? 
    - evaluate import on business metrics
    - if observed revenue-related metrics improves consistently => gradually increase traffic to model
    - when have enough evidence that model improved revenue metrics, replace current production model
    - A/B testing 
        - extensive subject
        - use case specific
