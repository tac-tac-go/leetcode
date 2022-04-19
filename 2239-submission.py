class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        closest = 10**8
        nums = sorted(nums)
        for i in nums:
            if abs(i)<=abs(closest):
                closest = i
        return closest
        
