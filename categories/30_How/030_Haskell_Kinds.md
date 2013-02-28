Haskell Kinds
-------------

In Haskell some types can take type variable(s).
Typically: `[a]`.

Types have _kinds_;
The kind is to type what type is to function.
Kind are the types for types (so meta).

~~~
Int, Char :: *
[], Maybe :: * -> *
(,) :: * -> * -> *
[Int], Maybe Char, Maybe [Int] :: *
~~~
