class Solution:
    def isPathCrossing(self, path: str) -> bool:
        path_l = list(path)
        x,y = 0,0
        result = [[0,0]]
        for v in path_l:
            if v=="N":
                y+=1
            elif v=="E":
                x+=1
            elif v=="S":
                y-=1
            else:
                x-=1
            result.append([x,y])
        return True if len(set((map(tuple,result))))!=len(result) else False
        
            
            
        
        
