class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        key_l = [i for i,v in enumerate(nums) if v==key]
        result = []
        for j in key_l:
            for i,v in enumerate(nums):
                if abs(i-j)<=k:
                    result.append(i)
        result = sorted(set(result))
        return result
            
