class Solution:
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        array = list(set(nums1)&set(nums2))
        return int("".join(map(str,sorted([min(nums1),min(nums2)])))) if len(array)==0 else min(array) 
        
