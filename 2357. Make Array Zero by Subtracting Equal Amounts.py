class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        min_v = min(filter(lambda x:x>0,nums),default=0)
        count = 0
        while min_v > 0:
            nums = list(map(lambda x:max(x-min_v,0),nums))
            count += 1
            min_v = min(filter(lambda x:x>0,nums),default=0)
            
        return count
            
        
