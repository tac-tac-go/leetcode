class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        from collections import Counter
        nums_c = list(dict(Counter(nums)).items())
        value = sorted(nums_c,key=lambda x:(x[1],-x[0]))
        result = []
        for i,j in value:
            result.append([i]*j)
        return sum(result,[])
        
