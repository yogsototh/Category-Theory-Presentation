κατα-morphism: Finally length
-----------------------------

All needed information for making length.

~~~
instance Functor (StrF a) =
	fmap f (Cons c x) = Cons c (f x)
	fmap _ Nil = Nil

length' :: Str -> Int
length' = cata phi where
	phi :: Algebra StrF Int -- StrF Int -> Int
	phi (Cons a b) = 1 + b
	phi Nil = 0

main = do
	l <- length' $ stringToStr "Toto"
	...
~~~
