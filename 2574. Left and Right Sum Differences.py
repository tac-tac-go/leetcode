class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        left_sum = [0]
        right_sum = []
        l_v = 0
        for i,v in enumerate(nums[:-1]):
            l_v += v
            left_sum.append(l_v)
            right_sum.append(sum(nums[i+1:]))
        right_sum.append(0)
        return [abs(i-j) for i,j in zip(left_sum,right_sum)]

