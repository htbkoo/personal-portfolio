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

#### Model-centric view
1. Collect what data you can, and develop a model good enough to deal with the noise in the data 

2. Hold the data fixed and iteratively improve the code / model

### Data-centric view
1. The consistency of the data is paramount
2. Use tools to improve the data quality
3. This will allow multiple models to do well

4. Hold the code fixed and iteratively improve the data
