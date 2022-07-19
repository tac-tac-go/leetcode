class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        from collections import Counter
        array = list(Counter(nums).values())
        result1 = 0
        for i,v in enumerate(array):
            result1+=v//2
            array[i]=v%2
        result2 = sum(array)
        return [result1,result2]
        
