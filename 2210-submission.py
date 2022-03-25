class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        nums += [-1]
        result = []
        for i in range(0,len(nums)-1):
            if nums[i]!=nums[i+1]:
                result.append(nums[i])
        count = 0
        for i in range(1,len(result)-1):
            if result[i] > result[i-1] and result[i] > result[i+1]:
                count+=1
            elif result[i] < result[i-1] and result[i] < result[i+1]:
                count+=1
        return count
            
