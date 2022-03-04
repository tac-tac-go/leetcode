class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        next_d = paths[0][1]
        next_root = [i[0] for i in paths]
        while next_d in next_root:
            next_d = paths[next_root.index(next_d)][1]
        return next_d
            
        
