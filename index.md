---
layout: default
title: Projects Overview
---

# Projects

## Learning to segment neuron boundaries in electron microscopy sections using sparse labels with topological constraints

![ilpSegmentationResult.png]({{ site.url }}/assets/images/ilpSegmentationResult.png)

High resolution electron microscopy (EM) techniques are widely used in the studies of nanometer scaled structures. It's particularly useful in neuroscience research to acquire images containing *synapses* - the junctions through which neurons communicate with each other. In order to make sure the findings of a study are statistically significant, researchers need to analyze large data sets. When it comes to analyzing large image data sets, automatic image segmentation methods are essential to keep the time spent on annotating images to a minimum. Moreover, subjectivity of human annotations can also be avoided by automating image segmentation since algorithms are consistent in performing the task they are programmed to carry out.

Current state of the art methods for pixel-wise classification of EM images are mainly based on learning a deep convolutional neural network. Such an approach requires a large training data set. Once such a network is learned for one dataset, the same network cannot be readily used for other datasets.

In this project we developed an image segmentation method to annotate individual neuron slices on 2D EM sections as shown in the above figure that only takes a small fraction of the training lables required to train a CNN. 

The method casts the image segmentation problem into an edge and face labeling problem of a graph. The task at hand would then be to activate or inactivate the labels and the faces of the graph so that the faces of the graph set to be in foreground would correspond to neuron slices. This was achieved by formulating an *Integer Linear Program* with local linear constraints that make sure the solution is consistent with the structure we expect in the final segmentation along with a linear cost function that guides the optimization to the most likely segmentation using the precalculated probabilities individual of pixels of the image to be labeled as belonging to *neuron membrane*. We have tried *random forest classifiers* and *convolutional neural networks* to obtain these probability maps with the latter providing better results. 

[Code (experimental version)](https://bitbucket.org/thanujadax/contourdetection) | [Poster]({{ site.url }}/assets/docs/Thanuja_NCCBI_poster_2015_3.pdf) | [Manuscript in preparation]


## Non-parametric Bayesian estimation of thickness and anisotropy of serial section electron microscopy images

![sectionThicknessProject.png]({{ site.url }}/assets/images/thicknessWeb.png)

Serial section electron microscopy is a widely used technique in neuroscience research to study anatomical structures and their changes due to experimental stimuli. Serial section images allow researchers to quantify structures in an image *volume* which is typically a stack of images corresponding to a sequence of adjacent tissue sections each of which is only tens of nanometers thick. However, due to imperfections in sample preparation and the sectioning process, the thickness of the sections might vary from the parameters set in the equipment. To obtain accurate statistics using the quantifications within the volumes analysed and also to have realistic 3D reconstructions from the serial section data, we have to estimate the physical thickness of these sections.
Since it's difficult to measure directly, we propse a method to estimate the thickness using image statistics alone by modeling the relationship between image similarity and the distance between the two images using [gaussian processes]({{site.url}}/mldsc#gaussianprocesses).

[Code (experimental version)](https://bitbucket.org/thanujadax/sectionthickness) | [Manuscript in preparation]

## Automatic quantification of multi-synaptic boutons on large ssSEM sections
[on going]



## Kernel-based linear approximations for non-linear dynamical systems
*Master's Thesis (2011)*

Non-linear dynamical systems try to describe the *state* of a system of components that interact with each other by modeling these interactions using a set of ordinary differential equations. In this project we focused on a couple of known models of *gene regulatory networks*. We attempted to find approximate linearized versions of these models in high dimensional feature space. We then used such linearized models to estimate the states of unobserved quantities using *Kalman filtering*.

## E-lemming: Remotely controlled bacterium
*Summer Project (2010)*

In this project we remotely controlled the movement of a bacterium using a joy stick. This was achieved by genetically modifying E.coli bacterium to drive its chemotaxis pathway using light inputs instead of a food gradient. This summer project was submitted to the [iGEM competition](http://2010.igem.org/Main_Page) (2010) held at [Massachusetts Institute of Technology](http://web.mit.edu/).

More information can be found in the [iGEM 2010 ETH Zurich project page](http://2010.igem.org/Team:ETHZ_Basel).
