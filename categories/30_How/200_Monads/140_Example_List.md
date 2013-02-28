Example: List
-------------

- `[] :: * -> *` an <span class="yellow">Endofunctor</span>
- \\(⊙:M×M→M\\) a nat. trans. (`join :: M (M a) -> M a`)
- \\(η:I→M\\)  a nat. trans.

<pre class="haskell"><code>-- In Haskell ⊙ is "join" in "Control.Monad"
join :: [[a]] -> [a]
join = concat

-- In Haskell the "return" function (unfortunate name)
η :: a -> [a]
η x = [x]</code></pre>
