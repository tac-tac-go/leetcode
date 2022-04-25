class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        result = nums[0]
        for i in range(1,len(nums)):
            result = set(result) & set(nums[i])
        return sorted(result)
        
