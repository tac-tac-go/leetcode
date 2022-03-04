class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        import numpy as np
        array = np.array(mat)
        array_r = np.rot90(array,1)
        array_r2 = np.rot90(array,2)
        array_r3 = np.rot90(array,3)
        return np.array_equal(target,array_r) or np.array_equal(target,array_r2) or np.array_equal(target,array_r3) or np.array_equal(target,array) 
