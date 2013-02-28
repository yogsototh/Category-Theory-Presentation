Haskell Functors for the programmer
------------------------------

`Functor` is a type class used for types that can be mapped over.

- Containers: `[]`, Trees, Map, HashMap...
- "Feature Type":
	- `Maybe a`: help to handle absence of `a`.  
	Ex: `safeDiv x 0 ⇒ Nothing`
	- `Either String a`: help to handle errors  
	Ex: `reportDiv x 0 ⇒ Left "Division by 0!"`
