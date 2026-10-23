# Feature Selection and Feature Engineering

<!-- TOC -->
* [Feature Selection and Feature Engineering](#feature-selection-and-feature-engineering)
  * [1. One hot encoding](#1-one-hot-encoding)
  * [2. Feature hashing](#2-feature-hashing)
  * [3. Crossed features](#3-crossed-features)
  * [4. Embedding](#4-embedding)
  * [5. Numerical features](#5-numerical-features)
    * [Normalization](#normalization)
    * [Standardization](#standardization)
<!-- TOC -->

## 1. One hot encoding
One hot encoding is a technique used to convert categorical variables into a format that can be provided to machine learning algorithms to do a better job in prediction.

It creates binary columns for each category in the categorical variable, where each column represents the presence or absence of a category.

For example, if we have a categorical variable "color" with three categories: "red", "green", and "blue", one hot encoding will create three binary columns:

## 2. Feature hashing
Feature hashing is a technique used to convert categorical variables into numerical features by applying a hash function to the categories.

This technique is particularly useful when dealing with high cardinality categorical variables, as it allows us to reduce the dimensionality of the data while preserving the information.

For example, if we have a categorical variable "color" with three categories: "red", "green", and "blue", we can apply a hash function to each category to convert it into a numerical feature.

```python
import hashlib

def feature_hashing(category):
    return int(hashlib.md5(category.encode()).hexdigest(), 16) % 1000  # Hash to a range of 0-999

categories = ["red", "green", "blue"]
hashed_features = [feature_hashing(category) for category in categories]
print(hashed_features)  # Output: [123, 456, 789] (example output)
```

## 3. Crossed features
Crossed features are a technique used to create new features by combining two or more categorical variables.

This technique is particularly useful when dealing with high cardinality categorical variables, as it allows us to capture interactions between the variables.

For example, if we have two categorical variables "color" and "size", we can create a new feature by crossing the two variables:

```python
import pandas as pd
def cross_features(df, col1, col2):
    return df[col1].astype(str) + "_" + df[col2].astype(str)
    
df = pd.DataFrame({
    "color": ["red", "green", "blue"],
    "size": ["small", "medium", "large"]
})
crossed_feature = cross_features(df, "color", "size")
print(crossed_feature)  # Output: ['red_small', 'green_medium', 'blue_large']
```

## 4. Embedding
Embedding is a technique used to convert categorical variables into dense vectors of fixed size. This technique is particularly useful when dealing with high cardinality categorical variables, as it allows us to capture the relationships between the categories in a lower-dimensional space.

For example, if we have a categorical variable "color" with three categories: "red", "green", and "blue", we can create an embedding for each category:

```python
import numpy as np
def create_embedding(category, embedding_size=2):
    # Example embedding for each category
    embeddings = {
        "red": np.array([1.0, 0.0]),
        "green": np.array([0.0, 1.0]),
        "blue": np.array([0.5, 0.5])
    }
    return embeddings.get(category, np.zeros(embedding_size))
categories = ["red", "green", "blue"]
embeddings = [create_embedding(category) for category in categories]
print(embeddings)  # Output: [array([1., 0.]), array([0., 1.]), array([0.5, 0.5])]
```

## 5. Numerical features
Numerical features are continuous variables that can take any value within a range. These features are often used in machine learning algorithms as they can capture the relationships between the variables in a more precise way.

For example, if we have a numerical variable "age", we can use it as a feature in our machine learning model:

```python
import numpy as np
def create_numerical_feature(age):
    return np.array([age])
ages = [25, 30, 35]
numerical_features = [create_numerical_feature(age) for age in ages]
print(numerical_features)  # Output: [array([25]), array([30]), array([35])]
```

### Normalization
Normalization is a technique used to scale numerical features to a specific range, typically between 0 and 1. This is important because many machine learning algorithms perform better when the features are on a similar scale.

```python
from sklearn.preprocessing import MinMaxScaler
def normalize_features(features):
    scaler = MinMaxScaler()
    return scaler.fit_transform(features)
features = np.array([[25], [30], [35]])
normalized_features = normalize_features(features)
print(normalized_features)  # Output: [[0.], [0.5], [1.]]
```

### Standardization
Standardization is a technique used to scale numerical features to have a mean of 0 and a standard deviation of 1. This is particularly useful when the features have different units or scales.

```python
from sklearn.preprocessing import StandardScaler
def standardize_features(features):
    scaler = StandardScaler()
    return scaler.fit_transform(features)
features = np.array([[25], [30], [35]])
standardized_features = standardize_features(features)
print(standardized_features)  # Output: [[-1.22474487], [0.], [1.22474487]]
```
