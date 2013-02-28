Haskell Types
-------------

Sometimes, the type determine a lot about the function<sup>★</sup>:

<pre class="haskell"><code>fst :: (a,b) -> a -- Only one choice
snd :: (a,b) -> b -- Only one choice
f :: a -> [a]     -- Many choices
-- Possibilities: f x=[], or [x], or [x,x] or [x,...,x]

? :: [a] -> [a] -- Many choices
-- can only rearrange: duplicate/remove/reorder elements
-- for example: the type of addOne isn't [a] -> [a]
addOne l = map <span class="red">(+1)</span> l
-- The (+1) force 'a' to be a Num.</code></pre>

<p><span class="small base01">★:<a href="http://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf">Theorems for free!, Philip Wadler, 1989</a></span>
