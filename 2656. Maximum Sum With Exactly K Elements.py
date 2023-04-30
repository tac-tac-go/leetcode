class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        result = []
        nums = sorted(nums)
        for i in range(k):
            val = nums[-1]
            result.append(val)
            del nums[-1]
            nums.append(val+1)
        return sum(result)
            


