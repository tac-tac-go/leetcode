class Solution:
    
    def numPrimeArrangements(self, n: int) -> int:
        prime_n = "2   3   5   7   11   13   17   19   23   29   31   37   41   43   47   53   59   61   67   71   73   79   83   89   97".split("   ")
        prime_n = list(map(int,prime_n))
        
        def permutations_count(n, r):
            return math.factorial(n) // math.factorial(n - r)
        
        import math
        c_prime = 0
        n_prime = 0
        for i in range(1,n+1):
            if i in prime_n:
                c_prime += 1
            else:
                n_prime += 1
        return ((permutations_count(c_prime,c_prime)*permutations_count(n_prime,n_prime))%(10**9+7))
        

