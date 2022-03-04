class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums_c = sorted(nums)[::-1]
        count=0
        result = []
        for i in range(len(nums_c)):
            if count+nums_c[i] > sum(nums_c[i+1:]):
                result.append(nums_c[i])
                break
            else:
                count+=nums_c[i]
                result.append(nums_c[i])
        return result
            
