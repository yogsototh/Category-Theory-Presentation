Example: List (law verification)
--------------------------------

Example: `List` is a functor (`join` is ⊙)

- \\(M ⊙ (M ⊙ M) = (M ⊙ M) ⊙ M\\)
- \\(η ⊙ M = M = M ⊙ η\\)

<pre class="nohighlight small"><code>join [ join [[x,y,...,z]] ] = join [[x,y,...,z]]
							= join (join [[[x,y,...,z]]])
join (η [x]) = [x] = join [η x]</code></pre>

Therefore `([],join,η)` is a monad.
