class Solution:
    def averageValue(self, nums: List[int]) -> int:
        result = list(filter(lambda x:x%3==0 and x%2==0,nums))
        try:
            return sum(result)//len(result)
        except:
            return 0
