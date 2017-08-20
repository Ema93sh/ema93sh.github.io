---
layout: post
title:  "Beta Reduction"
date:   2017-01-09 12:10:01 -0600
categories: programming-language-design
tags:
      - research
---



Lambda($$\lambda$$) calculus was developed by American mathematician Alonzo Church in 1930s.
It is a turning complete language (i.e) any computation that can be represented by a single taped turing
machine can be expressed by lambda calculus. Lambda calculus is the theoretical basis
for many of the modern functional programming languages like OCaml, ML, Haskell and Lisp.
It is also commonly used as the formal language of discourse in the field of programming language research.
The calculus is known for its simplicity. The language consists of three simple concepts:

* Variables/Names - can be numbers or letters
* Lambda abstraction - denoted by the greek letter $$\lambda$$
* Application - the application of lambda abstraction on an input term

The syntax of lambda calculus is given by:  

$$
\begin{align*}
  \langle expression \rangle &:= \langle name \rangle  |  \langle function \rangle  |  \langle application \rangle\\
  \langle function \rangle   &:= \lambda \langle name \rangle . \langle expression \rangle\\
  \langle application \rangle &:= \langle expression \rangle . \langle expression \rangle
\end{align*}
$$

The following are all valid lambda calculus expressions:

$$
\begin{align*}
  \text{id}   &=\lambda x. x \tag*{(Identity function)} \\
  \text{fst}  &=\lambda x. \lambda y. x \tag*{(Select first element)} \\
  \text{snd}  &=\lambda x. \lambda y. y \tag*{(Select second element)} \\
  \text{apply}&=\lambda f. \lambda x. f x \tag*{(Function Application)}
\end{align*}
$$

There are three different operations that can be performed on a lambda calculus expression:

* Alpha($$\alpha$$) Conversion
* Beta($$\beta$$) Reduction
* Eta($$\eta$$) Conversion

The main focus of this article will be on Beta Reduction.

## Beta Reduction
The term "Reduction", can be thought of as one step of computation (i.e)
it transforms a complex expression into a simpler expression. Reduction can be
applied multiple times until an expression cannot be reduced anymore. The expressions
that cannot be reduced anymore are often the values of that programming language.
These non-reduceable expressions are said to be in normal form.

In lambda calculus, reduction on a term containing lambda abstraction on the left is called Beta Reduction.
Informally it is the application of lambda abstraction on to its arguments and is more formally defined as:
\\[
 (\lambda x.e_1)e_2 \mapsto [e_2/x]e_1
\\]
The term $$[e_2/x]e_1$$ means substitute $$e_2$$ for every occurance of $$x$$ in $$e_1$$.
Some examples of beta reduction:

$$\begin{align*}
  (\lambda x.x)y \\
       &\begin{aligned}
          &\mapsto [y/x]x \\
          &\mapsto y
       \end{aligned} \\
  (\lambda x.xz)(\lambda y.y) \\
      &\begin{aligned}
          &\mapsto [(\lambda y.y)/x]xz \\
          &\mapsto (\lambda y.y)z \\
          &\mapsto [z/y]y \\
          &\mapsto z
       \end{aligned}
\end{align*}$$

Beta Reduction is used to define the Operational Semantics of lambda calculus.
It is given by three simple rules:  
$$\begin{align*}
   (\lambda x.e_1)e_2 \mapsto [e_2/x]e_1 \tag*{$(1)$}
\end{align*}$$

$$\begin{align*}
  &e_1 \mapsto e_1' \\
  &---- \tag*{$(2)$} \\
  &e_1 e_2 \mapsto e_1' e_2
\end{align*}$$

$$\begin{align*}
  &e_2 \mapsto e_2' \\
  &---- \tag*{$(3)$} \\
  &e_1 e_2 \mapsto e_1 e_2'
\end{align*}$$

One interesting thing to note about the semantics is that the rules are non-deterministic.
They do not provide the order to apply these rule on an expression.

## Capture Avoiding Substitution
In lambda calculus, the name of a variable in an expression does not play a significant role.
You can replace the name of variable in an expression and still retain the meaning of the expression,
this type of conversion is called alpha($$\alpha$$)-conversion
For example, the following expressions in lambda calculus are equivalent in meaning (alpha-equivalance)

$$\begin{align}
  \lambda x.x \equiv \lambda y.y \equiv \lambda z.z \\
  \lambda x.z \equiv \lambda y.z \equiv \lambda z.y
\end{align}$$

However it is possible to capture a free variable after performing an operation.
A free variable is considered captured when it is placed under a lambda abstraction
which binds it. This changes the meaning of the variable in a lambda expression.
For example, in the expression $$\lambda y.xy$$ if we blindly replace the variable
$$y$$ with $$x$$. This captures the variable $$x$$ which was initially a free variable
in the expression:

$$
\begin{align*}
  \lambda y.xy \not\equiv \lambda x.xx
\end{align*}
$$

Variable capture can also occur when performing beta reduction. For example,
if we blindly perform beta reduction in the expression $$(\lambda x.(\lambda y. xy))y$$, we get

$$
\begin{align*}
  (\lambda x.(\lambda y. xy))y \\
  &\mapsto [y/x](\lambda y.xy) \\
  &\mapsto \lambda y.yy
\end{align*}$$

which does not indicate the correct computation of the lambda expression because
now the free variable $$y$$ is captured/bound by the lambda abstraction after the substituition.
One way to avoid variable capture during $$\beta$$-reduction is to replace the
bound variable by a new variable name before performing the reduction.
For example:

$$
\begin{align*}
  (\lambda x.(\lambda y. xy))y \\
  &\mapsto (\lambda x.[t/y](\lambda y. xy) )y \\
  &\mapsto (\lambda x.(\lambda t. xt))y \\
  &\mapsto [y/x]\lambda t.xt \\
  &\mapsto \lambda t.yt
\end{align*}
$$

which gives a completely different but correct result. You can follow this general
recursive rule to perform such capture avoiding substituition:
$$
\begin{align*}
  [e/v]v &= v \\
  [e/v]w &= w  \tag*{$ v \not = w$} \\
  [e/v](e_1 e_2) &= [e/v]e_1 [e/v]e_2 \\
  [e/v](\lambda u.e_1) &= \lambda w. [e/v]([w/u]e_1)([w/u]e_1) \tag*{$w \not\in \{v\} \cup FV(\lambda u. e_1) \cup FV(e)$}
\end{align*}
$$

where $$FV(e)$$ is the set of free variables in the expression $$e$$

## Chruch Rosser Theorm
A lambda expression can have multiple redexes ( a term that can be reduced using beta reduction ).
Since the semantics of lambda calculus is non-deterministic (i.e) it does not give us the order to perform these reduction,
there can be multiple paths taken while performing beta reduction. For example:

$$
\begin{align*}
  (\lambda x. x x)(\underline{(\lambda xy. y x)y})\\
       &\begin{aligned}
          &\mapsto \underline{(\lambda x. x x)(\lambda z. z y)} \\
          &\mapsto \underline{(\lambda z. z y)(\lambda z. z y)} \\
          &\mapsto \underline{(\lambda z. z y)y} \\
          &\mapsto yy
       \end{aligned} \\
  \underline{(\lambda x. x x)((\lambda xy. y x)y)} \\
      &\begin{aligned}
          &\mapsto \underline{(\lambda xy. y x)y)}(\lambda xy. y x)y) \\
          &\mapsto (\lambda z. z y)\underline{(\lambda xy. y x)y)}\\
          &\mapsto \underline{(\lambda z. z y)(\lambda z. z y)}\\
          &\mapsto \underline{(\lambda z. z y) y}\\
          &\mapsto yy
       \end{aligned}
\end{align*}
$$


We see that the final evaluation result remains the same regardless of the path taken
during beta reduction. Alonzo Church and Barkley Rosser proved in 1936 that choosing
the order of redex does not change the result after the final termination.
This proof is commonly known as Church Rosser Theorm. The theorm is stated as follows:


{% raw %}
>  If  $$ e \xrightarrow{*} e_1$$ and $$e \xrightarrow{\ast} e_2$$ by arbitary sequence of reduction
>  then there exists $$e_3$$ such that $$e_1 \xrightarrow{*} e_3$$ and $$e_2 \xrightarrow{\ast} e_3$$
{% endraw %}

An important corollary of the Church Rosser Theorm is that any lambda expression has
at most one normal form.

## Reduction Strategies
Since a lambda expression can have multiple redexes, we need a strategy to choose the next redex to reduce.
The number of reductions needed to arrive at the normal form depends on the startegy used.
Languages based on lambda calculus employ different strategies to choose the redex.
The most common strategies are:

* Applicative Order
* Normal Order

### Applicative Order
In applicative order reduction, the leftmost of the innermost redex is always choosen. For example:

$$
\begin{align*}
  (\lambda x. x x)(\underline{(\lambda xy. y x)y}) \\
    &\mapsto \underline{(\lambda x. x x)(\lambda z. z y)} \\
    &\mapsto \underline{(\lambda z. z y)(\lambda z. z y)} \\
    &\mapsto \underline{(\lambda z. z y)y} \\
    &\mapsto yy
\end{align*}
$$

This type of reduction corresponds to *call by value* parameter passing mechanism. The advantage of using
this strategy is that the arguments are evaluated exactly once. However, if we choose this strategy,
it has the possiblility to end up in an expression that does not terminate.
For example:

$$
\begin{align*}
  (\lambda x. x y)(\underline{(\lambda x. x x)(\lambda x. x x)}) \\
    &\mapsto (\lambda x. x y)(\underline{(\lambda x. x x)(\lambda x. x x)}) \\
    &\mapsto (\lambda x. x y)(\underline{(\lambda x. x x)(\lambda x. x x)}) \\
    &\mapsto \cdot \cdot \cdot
\end{align*}
$$

### Normal Order
In normal order reduction, the leftmost redex is always choosen. For example:

$$
\begin{align*}
  \underline{(\lambda x. x x)((\lambda xy. y x)y)} \\
  &\mapsto \underline{((\lambda xy. y x)y)}((\lambda xy. y x)y) \\
  &\mapsto \underline{(\lambda z. z y)((\lambda xy. y x)y)}\\
  &\mapsto \underline{((\lambda xy. y x)y)}y\\
  &\mapsto \underline{(\lambda z. z y)y}\\
  &\mapsto yy
\end{align*}
$$

This type of reduction corresponds to *call by name* parameter passing mechanism.
If a normal form exists for a lambda expression then normal order reduction will find it.
For the previous non-terminating example when we use normal order reduction strategy instead
of applicative order, we get:

$$
\begin{align*}
  \underline{(\lambda x. x y)((\lambda x. x x)(\lambda x. x x)}) \\
    &\mapsto \underline{(\lambda x. x x) y} \\
    &\mapsto y y
\end{align*}
$$

One disadvantage of using normal order reduction is that the redexes on the arguments maybe copied.
For example:

$$
\begin{align*}
  \underline{(\lambda x. x x)((\lambda y. y)t)} \\
    &\mapsto ((\lambda y. y)t)((\lambda y. y)t)
\end{align*}
$$

This causes duplicate computation of the lambda term, in this case $$((\lambda y. y)t)$$
needs to be computed twice to get to the normal form. Thus requiring more steps to
arrive at the normal form.

## Conclusion
$$\beta$$-reduction plays an important role in understanding the semantics of lambda calculus.
It along with the reduction strategies defines the basis for evaluating a lambda calculus
expression.

If want to play around with lambda calculus to get a better understanding, try out a simple REPL that I created for
lambda calculus in Haskell. [Lambda Calculus REPL](https://github.com/Ema93sh/lambda-calculus-interpreter)

[Article in PDF format]({{ site.url }}/static-files/pdfs/beta_reduction.pdf)


## References
[http://www.cs.yale.edu/homes/hudak/CS201S08/lambda.pdf](http://www.cs.yale.edu/homes/hudak/CS201S08/lambda.pdf)

[http://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf](http://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf)

[https://en.wikipedia.org/wiki/Lambda_calculus](https://en.wikipedia.org/wiki/Lambda_calculus)

[http://prl.ccs.neu.edu/blog/2016/11/02/beta-reduction-part-1/](http://prl.ccs.neu.edu/blog/2016/11/02/beta-reduction-part-1/)
