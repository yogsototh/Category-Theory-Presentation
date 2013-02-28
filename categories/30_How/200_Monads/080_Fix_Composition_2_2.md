Fix Composition (2/2)
--------------------------------------------

Goal, find: `◎ :: (b -> F c) -> (a -> F b) -> (a -> F c)`  
`f :: a -> F b`, `g :: b -> F c`, <span class="yellow">`f x :: F b`</span>:

- Use `fmap :: (t -> u) -> (F t -> F u)`!
- `(fmap g) :: F b -> F (F c)` ; (`t=b`, `u=F c`)
- `(fmap g) (f x) :: F (F c)` it almost WORKS!
- We lack an important component, `join :: F (F c) -> F c`
- `(g ◎ f) x = join ((fmap g) (f x))` ☺  
◎ is the Kleisli composition; in Haskell: `<=<` (in `Control.Monad`).
