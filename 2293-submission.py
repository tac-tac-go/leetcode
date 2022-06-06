class Solution:
    def minMaxGame(self, nums: List[int]) -> int:
        while len(nums)>1:
            result = []
            for i in range(0,len(nums)//2,1):
                if i%2==0:
                    result.append(min(nums[2*i],nums[2*i+1]))
                else:
                    result.append(max(nums[2*i],nums[2*i+1]))
            nums = result
        return nums[0]
            
        
