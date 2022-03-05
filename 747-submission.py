class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        nums_m = max(nums)
        not_max = list(sorted(filter(lambda x:x!=nums_m,nums)))[::-1]+[0]
        not_max = not_max[0]
        return nums.index(nums_m) if nums_m >= 2*not_max else -1
