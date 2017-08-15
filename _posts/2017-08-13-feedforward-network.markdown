---
layout: post
title: Feedforward Neural Network
date: '2017-08-13 01:12:00 -0600'
categories: deep-learning
tags:
  - deep-learning
  - feedforward
  - neural-network
  - machine-learning
---

Feedforward neural network also known as *Multilayer Perceptrons (MLPs)* are the quintessential models of deep learning. The goal of the network is to generate an approximation of a function $$f^{\ast}$$. It defines a mapping $$ y = f(x;\theta) $$ where it learns the value $$ \theta $$ to get the best approximation of the function $$ f^{\ast} $$. In this model of neural network, the information flows through in a single direction, from the input nodes $$ x $$ to the hidden nodes and then finally through the output nodes. There is no cycle or feedback connections in this network. Hence the name *Feedforward*.

The best way to understand a feedforward network is by representing it with a [*Directed Acyclic Graph*](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG)
where the nodes of the DAG are functions. Each path in this DAG represents a composition of functions ordered by
the nodes in the path. For example, Consider a simple neural network represented by the following DAG with a single path:  

<div style="text-align:center"><img src ="/images/Simple Neural Network.svg" />
<div style="padding-bottom: 10px;font-size: 14px;">Figure 1</div>
</div>


The path represents the composed function $$ f(x) = f^{(3)}(f^{(2)}(f^{(1)}(x))) $$. Here, $$ f^{(1)} $$ is called the first layer, $$ f^{(2)} $$ is called the second layer and so on. The last layer $$ f^{(3)} $$ is called the output layer. The layers between input layer and the output layer are collectively called the hidden layers of the neural network. There can be multiple hidden layer in a neural network model.

Linear models such as logistic regression and linear regression are appealing because they may be fit efficiently and reliably with convex optimization. However they have significant limitation that they can be used to represent only a [*linear function*](https://en.wikipedia.org/wiki/Linear_function). They cannot be used to represent models where there is dependency between two input variables.

The best example to illustrate this is by learning a XOR function. Let our model $$ f(x;\theta) $$ be a linear model
defined as:

$$

f(x;w,b) = x^{T} w + b

$$

and let Mean Squared Error (MSE) be the loss function:

$$
J(\theta) = 1/4  \sum_{x \in X} (f^{\ast}(x) - f(x;\theta))^2
$$

When the model is learnt, we obtain $$ w = 0 $$ and $$ b = 1/2 $$. The trained linear model outputs 0.5 for every input.
It is impossible for a linear model to represent a XOR function. The reason is clear from the following figure:

<div style="text-align:center"><img src ="/images/xor-plot.png" />
<div style="padding-bottom: 10px;font-size: 14px;">Figure 2: XOR with linear model</div>
</div>
 Deep learning tries to overcome this limitation and can be used to represent any non linear function. It extends the linear model to represent any non linear function by applying the linear model not to the input $$ x $$ but to the transformed input $$ \phi(x) $$ where $$ \phi $$ is a non linear transformation.

Consider a simple feedforward network represented in the *Figure 1*. The network contains two functions chained together,
$$ h = f(x;W,c) $$ and $$ y = f(h;w;b) $$ and the complete model being $$ f(x; W, c, w, b) = f^{(2)}(f^{(1)}(x)) $$. If we
make $$ f^{(1)} $$ function linear then the whole model would still be linear. Suppose $$ f^{(1)}(x) = W^{T} x $$ and
$$ f^{(2)}(h) = h^{T}w $$ (Ignoring the intercept terms). Then $$ f(x) = w^T W^T x $$. This is clearly a linear model.

In order to make the model non-linear, we need to use non-linear function to represent the features. Neural network do this
by applying a non-linear function called an *activation function* to the learned parameters. Now $$ h = g(W^T x + c) $$ where
g is the non-linear activation function. Most modern neural network use *Rectified Linear Unit* (ReLU) as the activation function. Once we train the neural network, the hidden layers would learn a feature space for the give input example and this new transformed input can be used to as the input to a linear model.

<div style="text-align:center;">
 <img src ="/images/XOR Neural Network.svg" style="padding:8px"/>
 <div style="padding-bottom: 10px;font-size: 14px;">Figure 3: Neural Network for XOR function</div>
</div>

For the XOR example, consider a neural network represented in *Figure 3*. Once the model is trained, the hidden layers h1 and h2 learns a transformed feature space. This transformation has changed the relationship between the input and the output.

<div style="text-align:center;">
 <img src ="/images/Transformed Input XOR.svg" style="padding:8px"/>
 <div style="padding-bottom: 10px;font-size: 14px;">Figure 4: Learned Feature Space</div>
</div>

The linear model will now be able easily to describe this transformed input.
