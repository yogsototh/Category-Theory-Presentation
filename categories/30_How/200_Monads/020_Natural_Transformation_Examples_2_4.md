Natural Transformation Examples (2/4)
------------------------------------

<pre><code class="haskell small">data Tree a = Empty | Node a [Tree a]
toList :: Tree a -> [a]
toList Empty = []
toList (Node x l) = [x] ++ concat (map toList l)</pre></code>


`toList` is a natural transformation.
It is also a morphism from `Tree` to `[]` in the Category of \\(\\Hask\\) endofunctors.

<img style="float:left;width:30%" src="categories/img/mp/nattrans-tree-list.png" alt="natural transformation commutative diagram"/>
<figure style="float:right;width:60%">
<img style="width:40%" src="categories/img/mp/tree-list-endofunctor-morphism.png" alt="natural transformation commutative diagram"/>
<figcaption><code>toList . toTree = id</code> &amp; <code>toTree . toList = id</code> <span style="visibility:hidden">&amp;</span><br/>
therefore <code>[]</code> &amp; <code>Tree</code> are <span class="yellow">isomorph</span>.
</figcaption>
</figure>
