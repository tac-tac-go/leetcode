class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        result = []
        for index,mv in enumerate(mat):
            result.append([index,mv.count(1)])
        result = dict(sorted(result,key=lambda x:(x[1],x[0])))
        return list(result.keys())[:k]
            
