Necessary laws
--------------------------------------------

For ◎ to work like composition, we need join to hold the following properties:

- `join (join (F (F (F a))))=join (F (join (F (F a))))`
- abusing notations denoting `join` by ⊙; this is equivalent to  
<span class="yellow">`(F ⊙ F) ⊙ F = F ⊙ (F ⊙ F)`</span>
- There exists `η :: a -> F a` s.t.  
<span class="yellow">`η⊙F=F=F⊙η`</span>
