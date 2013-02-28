κατα-morphism: extension to Trees
----------------------------------

Once you get the trick, it is easy to extent to most Functor.

~~~
type Tree = Mu TreeF
data TreeF x = Node Int [x]

instance Functor TreeF where
  fmap f (Node e xs) = Node e (fmap f xs)

depth = cata phi where
  phi :: Algebra TreeF Int -- TreeF Int -> Int
  phi (Node x sons) = 1 + foldr max 0 sons
~~~
