Natural Transformation Examples (4/4)
-------------------------------------

<pre><code class="haskell small">mToList :: Maybe a -> [a]
mToList Nothing = []
mToList Just x  = [x]</pre></code>


`toMaybe` is a natural transformation.
It is also a morphism from `[]` to `Maybe` in the Category of \\(\\Hask\\) endofunctors.

<img style="float:left;width:30%" src="categories/img/mp/nattrans-maybe-list.png" alt="natural transformation commutative diagram"/>
<figure style="float:right;width:60%">
<img style="width:40%" src="categories/img/mp/maybe-list-endofunctor-morphsm.png" alt="relation between [] and Maybe"/>
<figcaption>There is <span class="red">no isomorphism</span>.<br/>
Hint: <code>Bool</code> lists longer than 1.
</figcaption>
</figure>
