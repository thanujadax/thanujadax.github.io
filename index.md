---
layout: default
title: Projects Overview
---

# Projects

## Neuron slice segmentation on 2D electron microscopy images using local constraint-based optimization

![ilpSegmentationResult.png]({{ site.url }}/assets/images/ilpSegmentationResult.png)

High resolution electron microscopy (EM) techniques are widely used in the studies of nanometer scaled structures. It's particularly useful in neuroscience research to acquire images containing *synapses* - the junctions through which neurons communicate with each other. In order to make sure the findings of a study are statistically significant, researchers need to analyze large data sets. When it comes to analyzing large image data sets, automatic image segmentation methods are essential to keep the time spent on annotating images to a minimum. Moreover, subjectivity of human annotations can also be avoided by automating image segmentation since algorithms are consistent in performing the task they are programmed to carry out.

In this project we developed an image segmentation method to annotate individual neuron slices on 2D EM sections as shown in the above figure. The method casts the image segmentation problem into an edge and face labeling problem of a graph. The task at hand would then be to activate or inactivate the labels and the faces of the graph so that the faces of the graph set to be in foreground would correspond to neuron slices. This was achieved by formulating an *Integer Linear Program* with local linear constraints that make sure the solution is consistent with the structure we expect in the final segmentation along with a linear cost function that guides the optimization to the most likely segmentation using the precalculated probabilities individual of pixels of the image to be labeled as belonging to *neuron membrane*. We have tried *random forest classifiers* and *convolutional neural networks* to obtain these probability maps with the latter providing better results. 

## Non-parametric Bayesian estimation of thickness and anisotropy of serial section electron microscopy images
coming soon!

## Automatic quantification of multi-synaptic boutons on large ssSEM sections
coming soon!

## Kernel-based linear approximations for non-linear dynamical systems
coming soon!

## E-lemming: Remotely controlled bacterium
In this project we controlled the movement of a bacterium using a joy stick. This was achieved by genetically modifying E.coli by driving its chemotaxis pathway using light inputs instead of a food gradient. This was submitted to the [iGEM competition](http://2010.igem.org/Main_Page) (2010) held at [Massachusetts Institute of Technology](http://web.mit.edu/)
More information can be found in the [iGEM 2010 ETH Zurich project page](http://2010.igem.org/Team:ETHZ_Basel).
