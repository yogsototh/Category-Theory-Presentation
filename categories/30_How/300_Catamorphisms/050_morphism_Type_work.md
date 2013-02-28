κατα-morphism: Type work
------------------------

<pre class="haskell"><code>
data StrF a = Cons Char a | Nil
data Str = StrF Str

-- generalize the construction of Str to other datatype
-- Mu :: type fixed point

data Mu f = InF { outF :: f (Mu f) }
data Str = Mu StrF

-- Example
foo=InF { outF = Cons 'f'
		(InF { outF = Cons 'o'
			(InF { outF = Cons 'o'
				(InF { outF = Nil })})})}</code></pre>
