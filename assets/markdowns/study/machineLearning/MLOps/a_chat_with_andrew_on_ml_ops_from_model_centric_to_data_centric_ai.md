# [A Chat with Andrew on MLOps: From Model-centric to Data-centric AI](https://www.youtube.com/watch?v=06-AZXmwHjo) by Prof. Andrew Ng

## Points

### Performance

1. Improving data can delivery a much much better outcome (e.g. improve model accuracy) than improving model

### Caveats

1. Be aware of consistency of labels - sometimes all the methods are equally legitimate - the point is to use a consistent way, e.g.
    1. labelling sound clip - do we use "," vs "..." vs ignore fillers?
    2. box boundary labelling for objects - overlap vs not overlap vs just one big box
    3. steel defect detection - group large area of defects or pinpoint box per each

### Comparison - Making it systematic: MLOps

- Recap: 4 phases of machine learning project
    1. Scope project
    2. Collect data
    3. Train model
    4. Deploy in production

#### Model-centric view
1. Collect what data you can, and develop a model good enough to deal with the noise in the data 

2. Hold the data fixed and iteratively improve the code / model

3. e.g. how can I tune the model architecture to improve performance

### Data-centric view
1. The consistency of the data is paramount
2. Use tools to improve the data quality
3. This will allow multiple models to do well

4. Hold the code fixed and iteratively improve the data

5. How can I modify my data (new examples, data augmentation, labelling, etc.) to improve performance

### Data size
1. very frequently data size is ~10k (e.g. from the survey; counting in kaggle)
2. for small data set, label consistency is MORE IMPORTANT because noisy labels make it more difficult to find a function to represent the data
3. for bigger data set, the same degree of label noise would do less harm

#### Theory
Example:
- 500 examples
- 12% are noisy (incorrectly or inconsistently labled)

Following are about equally effective
- clean up the noise
    - i.e. clean up the 500*12%=60 examples
- collect another 500 new examples (double the training set)
    - actually this might be more difficult to do in practice

With a data centric view
- significant of room of improvement in problems with < 10000 examples (from the survey, could be the majority data set size that we would use)

### Long tail problems
- e.g. web search <= although search engine has a lot of data, some queries are only hit once a few day
- for these problems, still end up with a small data set

### Making it systematic - for `Train model` phase
- Iteratively improving the data, steps:
    1. Train a model
    2. Error analysis to identify the types of data the algorithm does poorly on (e.g. speech with car noise)
    3. Either get more of that data via data augmentation, data generation or data collection (change inputs x) or give more consistent definition for labels if they were found to be ambiguous (change labels y)

### Making it systematic - for `Deploy in production` phase
Deploy, monitor and maintain system

- deploy in production does not mean at the finish line already
- only half way done in a ML project

Need to
- monitor performance in deployment, and flow new data back for continuous refinement of model
    - systematically check for concept drift / data drift (performance degradation)
    - flow data back to retrain / update model regularly
