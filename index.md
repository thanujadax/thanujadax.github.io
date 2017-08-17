---
layout: default
title: Projects Overview
---

# Projects

## ENWAY - Technology stack for autonomous navigation and operation of service vehicles
![enwaylogo.png]({{ site.url }}/assets/images/enwaylogo.png | width=200)
[Visit company website](https://enway.ai)

## Efficient 2D neuron boundary segmentation with local topological constraints

![ilpSegmentationResult.png]({{ site.url }}/assets/images/segOutWeb.png)

High resolution electron microscopy (EM) techniques are widely used in the studies of nanometer scaled structures. It's particularly useful in neuroscience research to acquire images containing *synapses* - the junctions through which neurons communicate with each other. In order to make sure the findings of a study are statistically significant, researchers need to analyze large data sets. Therefore, automatic image segmentation methods are essential to keep the time spent on annotating images to a minimum. Moreover, subjectivity of human annotations can also be avoided by automating image segmentation since algorithms are consistent in performing the task they are programmed to carry out.

Most of the neuron segmentation algorithms are based on pixelwise predictions of neron membrane probabilities. Due to lack of training labels or low SNR in the images, the pixelwise predictions might be of low quality. This could lead to merge and split errors in neuron segmentations. 

We represent the segmentation problem as an edge labeling problem in a graph. The segmentation is therefore reduced to assigning a state {0,1} to the edges and faces of a graph. This is done using an integer linear program formulation. We use a set of topological constraints which leads to lower split and merge errors.

[Source code (experimental)](https://github.com/thanujadax/toposeg2d) | [Manuscript in preparation]


## Non-parametric Bayesian estimation of thickness and anisotropy of serial section electron microscopy images

![sectionThicknessProject.png]({{ site.url }}/assets/images/thicknessWeb.png)

Serial section electron microscopy is a widely used technique in neuroscience research to study anatomical structures and their changes due to experimental stimuli. Serial section images allow researchers to quantify structures in an image *volume* which is typically a stack of images corresponding to a sequence of adjacent tissue sections each of which is only tens of nanometers thick. However, due to imperfections in sample preparation and the sectioning process, the thickness of the sections might vary from the parameters set in the equipment. To obtain accurate statistics using the quantifications within the volumes analysed and also to have realistic 3D reconstructions from the serial section data, we have to estimate the physical thickness of these sections.
Since it's difficult to measure directly, we propse a method to estimate the thickness using image statistics alone by modeling the relationship between image similarity and the distance between the two images using [gaussian processes]({{site.url}}/mldsc#gaussianprocesses).

[Source code (experimental)](https://github.com/thanujadax/gpthickness) | [Manuscript in preparation]

## Automatic quantification of changes of myelination and multi-synaptic boutons due to tutor exposure in songbirds
[on going]



## Kernel-based linear approximations for non-linear dynamical systems
*Master's Thesis (2011)*

Non-linear dynamical systems try to describe the *state* of a system of components that interact with each other by modeling these interactions using a set of ordinary differential equations. In this project we focused on a couple of known models of *gene regulatory networks*. We attempted to find approximate linearized versions of these models in high dimensional feature space. We then used such linearized models to estimate the states of unobserved quantities using *Kalman filtering*.

## E-lemming: Remotely controlled bacterium
*Summer Project (2010)*

In this project we remotely controlled the movement of a bacterium using a joy stick. This was achieved by genetically modifying E.coli bacterium to drive its chemotaxis pathway using light inputs instead of a food gradient. This summer project was submitted to the [iGEM competition](http://2010.igem.org/Main_Page) (2010) held at [Massachusetts Institute of Technology](http://web.mit.edu/).

More information can be found in the [iGEM 2010 ETH Zurich project page](http://2010.igem.org/Team:ETHZ_Basel).
