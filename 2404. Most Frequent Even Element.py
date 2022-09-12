class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        from collections import Counter
        array = Counter(filter(lambda x:x%2==0,nums))
        if len(array)==0:
            return -1
        
        return sorted(array.items(),key=lambda x:(-x[1],x[0]))[0][0]
