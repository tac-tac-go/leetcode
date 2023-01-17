class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        nums_s = [sum(map(int,list(i))) for i  in list(map(str,nums))]
        return abs(sum(nums)-sum(nums_s))
