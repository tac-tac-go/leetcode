class Solution:
    def arrangeCoins(self, n: int) -> int:
        result = 0
        index = 1
        n_rest = n
        while result < n:
            if n_rest >= index:
                n_rest-=index
                result+=index
                index+=1
            else:
                break
        return index-1
            
        
