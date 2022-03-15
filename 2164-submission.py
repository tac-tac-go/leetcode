class Solution:
    def sortEvenOdd(self, nums: List[int]) -> List[int]:
        even = []
        odd = []
        for i,v in enumerate(nums):
            if (i+1)%2==1:
                even.append(v)
            else:
                odd.append(v)
            
        even = sorted(even)
        odd = sorted(odd)[::-1]
        from itertools import zip_longest
        array = sum([[name,number] for name, number in zip_longest(even,odd)],[])
        array = list(filter(lambda x:x!=None,array))
        return array
            
