## "Non Haskell" Hask's Functors

A simple basic example is the \\(id\_\\Hask\\) functor.
It simply cannot be expressed as a couple (`F`,`fmap`) where

- `F::* -> *`
- `fmap :: (a -> b) -> (F a) -> (F b)`

Another example:

- F(`T`)=`Int`
- F(`f`)=`\_->0`
