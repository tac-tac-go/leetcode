import numpy as np
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        grid = np.array(grid).astype(int)
        array = np.zeros((len(grid)-2,len(grid)-2)).astype(int)
        for i in range(len(grid)-2):
            for j in range(len(grid)-2):
                array[i,j]=grid[i:i+3,j:j+3].max()
        return array
            
        
        
