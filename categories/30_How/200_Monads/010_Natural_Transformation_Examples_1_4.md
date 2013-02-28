Natural Transformation Examples (1/4)
------------------------------------

<pre><code class="haskell small">data Tree a = Empty | Node a [Tree a]
toTree :: [a] -> Tree a
toTree [] = Empty
toTree (x:xs) = Node x [toTree xs]</pre></code>


`toTree` is a natural transformation.
It is also a morphism from `[]` to `Tree` in the Category of \\(\\Hask\\) endofunctors.

<img style="float:left;width:30%" src="categories/img/mp/nattrans-list-tree.png" alt="natural transformation commutative diagram"/>
<figure style="float:right;width:60%">
<img style="width:40%" src="categories/img/mp/list-tree-endofunctor-morphism.png" alt="natural transformation commutative diagram"/>
</figure>
