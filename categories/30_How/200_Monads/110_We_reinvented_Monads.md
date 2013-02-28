We reinvented Monads!
---------------------

A monad is a triplet `(M,⊙,η)` where

- \\(M\\) an <span class="yellow">Endofunctor</span> (to type `a` associate `M a`)
- \\(⊙:M×M→M\\) a <span class="yellow">nat. trans.</span> (i.e. `⊙::M (M a) → M a` ; `join`)
- \\(η:I→M\\)  a <span class="yellow">nat. trans.</span> (\\(I\\) identity functor ; `η::a → M a`)

Satisfying

- \\(M ⊙ (M ⊙ M) = (M ⊙ M) ⊙ M\\)
- \\(η ⊙ M = M = M ⊙ η\\)
