κατα-morphism: missing information retrieved
--------------------------------------------

~~~
type Algebra f a = f a -> a
instance Functor (StrF a) =
	fmap f (Cons c x) = Cons c (f x)
	fmap _ Nil = Nil
~~~

~~~
cata :: Functor f => Algebra f a -> Mu f -> a
cata f = f . fmap (cata f) . outF
~~~

