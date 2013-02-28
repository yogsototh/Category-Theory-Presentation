Fix Composition (1/2)
--------------------------------------------

Goal, find: `◎ :: (b -> F c) -> (a -> F b) -> (a -> F c)`  
`f :: a -> F b`, `g :: b -> F c`:

- `(g ◎ f) x` ???
- First apply `f` to `x` ⇒ `f x :: F b`
- Then how to apply `g` properly to an element of type `F b`?
