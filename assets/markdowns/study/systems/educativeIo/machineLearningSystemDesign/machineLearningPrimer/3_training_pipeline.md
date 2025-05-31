# Training Pipeline

<!-- TOC -->
* [Training Pipeline](#training-pipeline)
  * [Training Pipeline](#training-pipeline-1)
  * [Data partitioning](#data-partitioning)
  * [Handle imbalance class distribution](#handle-imbalance-class-distribution)
  * [Choose the right loss function](#choose-the-right-loss-function)
  * [Retraining requirements#](#retraining-requirements)
<!-- TOC -->

## Training Pipeline

- training pipeline needs to handle large volumes of data with low costs
- can use column oriented format (e.g. Parquet or ORC) to store data 
    - high throughput
- tfrecord format for TensorFlow ecosystem

## Data partitioning

- partitioning by time for efficiency (avoid whole scan)
- most common (e.g. AWS) supports Parquet and ORC formats
- vs CSV: 30x faster query time + 99% less costs + 99% less data scanned 

## Handle imbalance class distribution

- common problem in use cases like:
    - Fraud Detection
    - Click Prediction
    - Spam Detection

- handling strategies:
    - use class weights in the loss function
        - e.g. for spam detection, 95% are non-spam and 5% are spam -> penalize non-spam more -> `loss_function = -w0*y*log(p) - w1*(1-y)*log(1-p)`
    - naive resampling techniques
        - resample non-spam class at certain raite to reduce imbalance in training data
        - have validation data and test data intact (no resampling)
    - using synthetic resampling techniques 
        - Synthetic Minority Oversampling Technique (SMOTE)
        - synthesize elements for minority class
            - based on existing
        - radom pick point from minority class and find its k nearest neighbors -> add
        - not widely used

## Choose the right loss function

- depends on use case
- binary classification: 
    - most popular: `cross-entropy` 
    - click-through-rate prediction (CTR): Facebook uses Normalized Cross Entropy (aka `logloss`)
        - make loss less sensitive to background conversion rates
- forecast problem: 
    - most common metrics:
        - Mean Absolute Percentage Error (MAPE)
            - need to pay attention whether target value is skew (i.e. too big or too small) 
        - Symmetric Absolute Percentage Error (SMAPE) 
            - not symmetric and treats under-forecast and over-forecast differently
    - Uber uses Recurrent Neural Network (RNN), Gradient Boosting Trees, Support Vector Regressors
    - examples:
        - marketplace forecasting
        - hardware capacity planning
        - marketing
    - for regression problem: DoorDash uses Quantile Loss to forecast Food Delivery demand
        - Quantile Loss = L(y_cap,y)=max(α(y_cap−y),(1−α)(y−y_cap))

## Retraining requirements#

- a requirement in many tech companies
- data distribution is non-stationary
- model does not perform well without retraining
- AdTech / recommendation / personalization:
    - important to retrain models to capture user behavior changes / trending topics
    - training pipeline needs to run fast and scale well with big data
        - balance between model complexity and training time
- common design pattern: use scheduler to retrain on a regular basis (e.g. many times per day)
