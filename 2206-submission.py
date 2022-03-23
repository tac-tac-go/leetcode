class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        from collections import Counter
        num_c = list(Counter(nums).values())
        return True if sum([v//2 for v in num_c])==(len(nums)//2) else False
        
