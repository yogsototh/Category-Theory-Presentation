Composition Fixable?
--------------------------------------------

How to fix that?  We want to construct an operator which is able to compose:

`f :: a -> F b` &amp; `g :: b -> F c`.

More specifically we want to create an operator ◎ of type

`◎ :: (b -> F c) -> (a -> F b) -> (a -> F c)`

Note: if `F` = I, ◎ = `(.)`.
