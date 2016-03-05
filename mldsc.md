---
layout: page
title: Machine Learning
---

In the image segmentation algorithms developed or used in our work we use *pixel-wise probability maps* as a starting point. What these probability maps essentially tell us is the probability of each pixel to be given a particular label of interest. For example, in our [2D neuron slice segmentation project]({{ site.url }}), we require the probability of each pixel of the EM image to be part of neuron membrane.

In our work we mainly use *random forest* classifiers and *convolutional neural networks*.

## Random forest classifiers
Random forest classifiers are a popular choice for classification tasks due to the lower requirement for training labels compared to a deep neural network. For many classification tasks it provides satisfactory results given proper selection of parameters due to it's ability to learn non-linear decision boundaries. When using a library like [Scikit-Learn](http://scikit-learn.org/stable/modules/ensemble.html#forest) one important parameter to tweak is *max_features* which is the number of randomly selected features it tries at each decision point in a tree. A low value would lead to a lower variance at the cost of increased bias. A typical value used for this is the square root of the total number of features available. *n_estimators* is the total number of trees in the forest which could ideally be found by doing a grid search while trying to minimize the validation error. 

Another parameter worth tuning would be the number of folds used in cross validation. Furthermore, it's useful to note that the quality of the classifier trained can be improved by carefully eliminating outliers in the training data.

In addition to the Scikit-Learn library, I have also tried the classifier provided by [ilastik](http://ilastik.org) - which has the added benefit of having a convenient graphical user interface to {create + predict + correct} training labels on the fly. This is particularly useful when working with image data.

## Convolutional neural networks 

Currently the state of the art pixel classification results are given by convolutional neural networks (CNNs). The main draw back of CNNs compared random forest classifiers is that CNNs require a much larger training dataset. In our work we used [this fast gpu-based implementation of a convolutional neural network](http://arxiv.org/abs/1509.03371) which is based on [Caffe library](http://caffe.berkeleyvision.org). 

## <a name="gaussianprocesses"></a>Non-linear regression using Gaussian Processes

Non-linear regression deals with the task of learning a function for a given set of input values to a given set of target values which are non-linearly related, so that future targets can be predicted by feeding future inputs to this function. Gaussian Processes give us a way to learn such arbitrary functions by allowing every point in the input space (training data points) to be associated with a normally distributed random variable. Furthermore, it provides a principled framework to determine the variance of the target values.

I'd like to refer to [Gaussian Processes for Machine Learning (Rasmussen and Williams, The MIT Press, 2006)](http://www.gaussianprocess.org/gpml/) for a comprehensive guide on the topic along with an easy to use [library](http://www.gaussianprocess.org/gpml/code/matlab/doc/) written in MATLAB. Apart from that, Scikit-Learn also has a [library](http://scikit-learn.org/stable/modules/gaussian_process.html) for Gaussian Process regression written in python.
