---
layout: post
title: Reinforcement Learning - MDP
date: '2017-08-22 01:08:00 -0600'
categories: reinforcement-learning
tags:
  - reinforcement-learning
  - machine-learning
  - ai
---

In general, the problems that *Machine Learning* tries to solve can be considered as an one shot decision making process (i.e) the decision can be made without considering the future or past decisions. The current decision made to classify a
particular input does not affect the future decisions made by the model. There is separate field of problems in machine
learning where the current decision being made has an impact on the future outcomes. This particular field of
machine learning where the process of making decision is sequential (one decision affects the next decision)
is called *Reinforcement Learning (RL)*.

A classic example where Reinforcement Learning can be applied are AI agent in *Atari Games* like Pong, Breakout, Space Invaders, etc. In Pong the decision to move UP or DOWN will affect the future reward/score as it determines if the paddle is moving toward or away from the ball and in turn will make it easier/difficult to block the ball from going past the paddle.

The sequential decision making problem that the reinforcement learning is trying to solve can be modeled more precisely by using a **Markov Decision Process** (MDP). MDPs are used to model the environment that the agent is trying to learn from. A Markov Decision Process consists of four elements:

<a id="read-more"></a>

  * States (S)
  * Actions (A)
  * Rewards (R)
  * Transitions (T)

#### States (S)
The states of a MDP is a vector of states that can be used to describe the domain of the problem. A state in an environment should consist of all the necessary information needed by the agent to make a decision. For example, Consider a simple gridworld problem consisting of a simple 4 x 4 grid, a hunter (H) and a treasure (T). In this game the goal of the hunter(H) is to find the treasure (T). One possible state that is possible in this game is:

<div style="text-align:center" id="Figure1"><img src ="/images/GridWorld Example.svg" />
<div style="padding-bottom: 14px;font-size: 14px;">Figure 1: Grid World</div>
</div>  

If the position of the treasure(T) is fixed in the game. The number of possible states in the game corresponds to the
number of possible positions that the Hunter can be in the game. The size of the state space (S) in this case is 16. If the position of the treasure is set randomly at each instance of the game,
then the possible state space increases to 16 * 16.

In general as the size of the state space increases, the complexity of the problem that the reinforcement learning is trying
to solve increases. It will have an impact on both the learning rate as well as the performance of the agent. One way of reducing the state space is by reducing the number of features used to represent a particular state. For example, In Pong the
size of state space can decreased drastically by considering only the position of the agents paddle and not by looking at the
position of the opponent. Even though this might increase the learning rate, it might have an impact on the performance of the
agent since now it does not take advantage of the position of the opponent paddle thereby making the AI agent defensive player. So it is important to define the state space (S) of reinforcement problem domain carefully so as to make sure it has the right balance between the performance of the agent and the learning rate.

However, recent advancement in reinforcement learning which uses neural networks has made it possible to apply reinforcement learning to really large state spaces. For example, google deepmind's [*AlphaGo*](https://deepmind.com/research/alphago/) which recently defeated the worlds best player in the game of [Go](https://en.wikipedia.org/wiki/Go_(game)) has a state space of approximately $$ 2.082 × 10^{170} $$.

<!-- TODO: Terminal States -->
Some states in an MDP can have special meaning. For examples, states can be marked as **Terminal States**, these states indicate the termination of the decision making process. In the case of the grid world example, the state where the Hunter(H) reaches the Treasure(T) can be considered as the terminal states.

#### Actions (A)

The actions in an MDP define the set of possible actions that the agent can perform in a particular state. For example, In Pong the set of possible actions are {Up, Down, NOOP}. The action space of the MDP also has an effect on the performance of the agent and learning rate. The reasoning will be clear when you visualize the state (S) and actions (A) as a tree, where the states are the nodes and the actions are the branches from the node. Each action leads to a new state (S), when the number of branches (Actions) in the tree increases, the number of nodes at the leaf of the tree increases exponentially.

<div style="text-align:center" id="Figure2"><img src ="/images/Actions Space.svg" />
<div style="padding-bottom: 14px;font-size: 14px;">Figure 2: The complexity increases as the size of action space(A) increases</div>
</div>  


So, the size of the action space has an exponential effect on the complexity of the reinforcement learning problem. Therefore, it is important to trim down the action space as much as possible to reduce the complexity of the MDP. For example, in the grid world problem given in *[Figure 1](#Figure1)*, One possible set of actions would be {UP, DOWN, LEFT, RIGHT, STAY}. If the goal of the game is to reach the treasure (T) in the minimum number of steps possible, it does not make sense to consider STAY as one of the possible moves. Now, the state space can be reduced down to {UP, DOWN, LEFT, RIGHT}. Even it might seems like a small reduction, remember that the action space has an exponential effect for the MDP. So reducing the actions by even 1 has a significant affect on the learning rate.

However, we need to be careful not to remove valid moves that will have an impact on the game performance. For example, reducing the action space to  {UP, DOWN, LEFT} for the grid world problem might reduce the complexity of the MDP but it would take the Hunter(H) far more steps to reach the Treasure(T) with only those actions or worse it might be impossible to reach the goal.

#### Rewards (R)

The reward (R) in a MDP  is a function  $$ R: S_{t} \times A \times S_{t+1} \rightarrow \mathbb{R} $$. It associates a real value to the state action pair. It can also be considered as the *immediate* reward that the agent gets for making a decision. The goal of any reinforcement learning agent will be to make decisions so as to maximize the overall reward G.

$$

G = \sum_{t=1}^{\infty} R(s_t, a_t, s_{t+1})

$$

$$ s_t $$ and $$a_t$$ are the state and action taken at the time step $$t$$. $$ s_{t+1} $$ is the state that the agent reaches after taking the action $$ a_t $$ in $$ s_t $$. The reward function in an MDP defines the goal of the RL agent. For example, in the grid world problem if the goal of the agent (Hunter (H)), is to reach the treasure(T) then the reward function should give a high value for state action pair that reaches the treasure (T) and low rewards otherwise.

Even the values that the reward function returns have a significant impact on the goal of the agent. For example if the agent gets reward value of $$ 2 $$ for state action pair that end with the goal state, for grid world this would be where the Hunter (H) finds the treasure (T), and value of $$ 1 $$ for all the other possible state action pair, then the agent would take the longest possible route to reach the treasure since the goal is to maximize the reward. If the agent gets negative reward for all other state action pair other than the terminal states then the agent would try to reach the terminal states by making as little actions as possible since the rewards would decrease as the number of steps to the goal/terminal state increases.


#### Transitions (T)

The transitions in a MDP is used to describe the stochastic nature of the environment. It maps a state(s) action(a) pair
at a time $$ t $$ to a distribution of states at time $$ t+1 $$.

$$

T(s_{t}, a_{t}, s\textsf{'}) = Pr(s_{t+1} = s\textsf{'} | s_{t}, a_{t})

$$

where $$ Pr(s_{t+1} = s\textsf{'} | s_{t}, a_{t}) $$ is the probability that the state $$s\textsf{'}$$ occurs when action
$$ a_{t} $$ is taken at state $$ s_{t} $$ at timestep $$ t $$.



#### Policy ($$\pi$$)

The core problem that RL is trying to solve is to find a policy $$ \pi(s) $$ which is a mapping from states to action, in other words, what is the best action to take at a state $$ s $$. We know that the best/optimal policy $$ \pi $$ is one that gives the maximum reward. So the reinforcement learning problem can be written for an MDP as:

$$
\DeclareMathOperator*{\argmax}{argmax}

\pi^{\ast} = \argmax_{\pi} E[G_{\pi}]

$$

where $$ E[G_{\pi}] $$ is the expected overall reward that the agent gets by following the policy $$\pi$$. There are a number of different algorithms for finding this optimal policy $$ \pi^{\ast} $$ in RL.

  * Dynamic Programming
      - Value Iteration
      - Policy Iteration
  * Monte Carlo Methods
  * Temporal Difference Learning - TD($$\lambda$$)
  * Q-Learning
