# Neural Funding

## Background
Neural networks are excellent AI models to learn complex datasets and handle large amounts of data. Modeling and predicting behavior generally includes a large amount of variables and the neural netowrk is able to handle that and to handle the complex, weighted, interactions between different inputs to arrive at a final prediction.

## Overview
Create a neural network to anticipate whether or not a funding application will be successful or not based on a variety of inputs.

## Results
### Target variable
- "IS_SUCCESSFUL" is the variable that our model should be able to predict.
### Variable(s) removed
- "NAME"
- "EIN"
### Feature variable(s)
- All other features in the dataset other than those mentioned already.
### Neurons, layers and activation functions used
#### Table 1 - Model Parameters Tested
| Trial | Layers | Node Counts | Activation Sequence | Epochs |
| ----- | ----- | ----- | ----- | ----- |
| 1 | 2 | 80, 30 | relu, relu, sigmoid | 100 |
| 2 | 3 | 80, 30, 10 | relu, relu, selu, sigmoid | 150 |
| 3 | 3 | 40, 30, 10 | relu, selu, selu, tanh | 150 |

### Target model performance achieved
#### Table 2 - Model Performance Achieved
| Trial | Loss | Accuracy |
| ----- | ----- | ----- |
| 1 | 0.5805 | 0.7206 |
| 2 | 0.6011 | 0.7217 |
| 3 | 0.5882 | 0.7202 |

### Steps taken to increase model performance.
The following steps were taken to improve performance:
- Binning the "ASK_AMT" column
- Adding hidden layers
- Changing the number of neurons per layer
- Changing the activation functions on various layers

## Summary
With the changes made, we were able to achieve approximately 72% accuracy. Using different combinations of layers, nodes, epochs and activation functions or different data-cleaning strategies could increase model performance. Alternatively, a different model could improve the performance. A quick test of a random-forest predictive model with a predictive accuracy of 72%. Using other models might not yield equivalent performance as there is an abundance of data and features that may factor in to the final decision.