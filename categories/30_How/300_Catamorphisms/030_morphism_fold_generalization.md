κατα-morphism: fold generalization
----------------------------------

`acc` type of the "accumulator":  
`fold :: (acc -> a -> acc) -> acc -> [a] -> acc`

Idea: put the accumulated value inside the type.

<pre class="haskell"><code>-- Equivalent to fold (+1) 0 "cata"
(Cons 'c' (Cons 'a' (Cons 't' (Cons 'a' Nil))))
(Cons 'c' (Cons 'a' (Cons 't' (Cons 'a' <span style="border: solid 1px;">0</span>))))
(Cons 'c' (Cons 'a' (Cons 't' <span style="border: solid 1px;">1</span>)))
(Cons 'c' (Cons 'a' <span style="border: solid 1px;">2</span>))
(Cons 'c' <span style="border: solid 1px;">3</span>)
<span style="border: solid 1px;">4</span></code></pre>


But where are all the informations? `(+1)` and `0`?
