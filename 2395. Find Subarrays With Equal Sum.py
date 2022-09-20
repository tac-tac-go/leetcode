class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        for i in range(len(nums)-1):
            for j in range(i+1,len(nums)-1):
                if sum(nums[i:i+2])==sum(nums[j:j+2]):
                    return True
        return False
                    
