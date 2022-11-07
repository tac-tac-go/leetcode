class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)-1):
            
            if nums[i]==nums[i+1]:
                nums[i]=2*nums[i]
                nums[i+1]=0
            
        nums_f = list(filter(lambda x:x>0,nums))
        return nums_f + [0]*(len(nums)-len(nums_f))
