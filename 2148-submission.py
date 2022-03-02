class Solution:
    def countElements(self, nums: List[int]) -> int:
        max_v = max(nums)
        min_v = min(nums)
        count = 0
        for i in nums:
            if i>min_v and i<max_v:
                count+=1
        return count
