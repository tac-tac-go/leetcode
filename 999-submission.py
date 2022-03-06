class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        import numpy as np
        array = np.array(board)
        #upper 
        posi = np.where(array=="R")
        x = posi[0][0]
        y = posi[1][0]
        #upper
        count = 0
        for i in range(x-1,-1,-1):
            if array[i,y]=="p":
                count+=1
                break
            elif array[i,y]=="B":
                break
        #down
        for i in range(x+1,8,1):
            if array[i,y]=="p":
                count+=1
                break
            elif array[i,y]=="B":
                break
        #left
        for i in range(y-1,-1,-1):
            if array[x,i]=="p":
                count+=1
                break
            elif array[x,i]=="B":
                break
        #right
        for i in range(y+1,8,1):
            if array[x,i]=="p":
                count+=1
                break
            elif array[x,i]=="B":
                break
        return count
        
        
        
        
        
