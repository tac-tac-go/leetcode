class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        result = []
        for v in ranges:
            result += [i for i in range(v[0],v[1]+1)]
        for i in range(left,right+1):
            if i in result:
                continue
            else:
                return False
        return True
        
