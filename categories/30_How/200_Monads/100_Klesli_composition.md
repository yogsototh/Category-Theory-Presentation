Klesli composition
------------------

Now the composition works as expected. In Haskell ◎ is `<=<` in `Control.Monad`.

`g <=< f = \x -> join ((fmap g) (f x))`

<pre class="haskell"><code>f x = [x]       ⇒ f 1 = [1]   ⇒ (f <=< f) 1 = [1] ✓
g x = [x+1]     ⇒ g 1 = [2]   ⇒ (g <=< g) 1 = [3] ✓
h x = [x+1,x*3] ⇒ h 1 = [2,3] ⇒ (h <=< h) 1 = [3,6,4,9] ✓</code></pre>
