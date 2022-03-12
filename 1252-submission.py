class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        import numpy as np
        array = np.zeros((m,n)).astype(int)
        for i,j in indices:
            array[i,:]+=1
            array[:,j]+=1
        return sum([1 for i in array.flatten() if i%2==1])
        
