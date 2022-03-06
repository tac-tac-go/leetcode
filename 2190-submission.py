class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        from collections import defaultdict
        d = defaultdict(int)
        for i in range(1,len(nums)):
            if nums[i-1]==key:
                d[nums[i]]+=1
        return sorted(dict(d).items(),key=lambda x:(-x[1]))[0][0]

