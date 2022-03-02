class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        x = len(matrix)
        check = range(1,x+1)
        for i in range(x):
            if set(matrix[i])==set(check):
                continue
            else:
                return False
        
        transpose = [list(i) for i in zip(*matrix)]
        for i in range(x):
            if set(transpose[i])==set(check):
                continue
            else:
                return False
        
        return True
