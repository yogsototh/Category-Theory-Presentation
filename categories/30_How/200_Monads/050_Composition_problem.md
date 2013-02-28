Composition problem
--------------------------------------------

The Problem; example with lists:

<pre class="haskell"><code>f x = [x]       ⇒ f 1 = [1]   ⇒ (f.f) 1 = [[1]] ✗
g x = [x+1]     ⇒ g 1 = [2]   ⇒ (g.g) 1 = ERROR [2]+1 ✗
h x = [x+1,x*3] ⇒ h 1 = [2,3] ⇒ (h.h) 1 = ERROR [2,3]+1 ✗ </code></pre>

The same problem with most `f :: a -> F a` functions and functor `F`.
