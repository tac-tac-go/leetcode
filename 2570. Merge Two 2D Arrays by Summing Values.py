class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        nums3 = nums1 + nums2
        from collections import defaultdict
        d = defaultdict(int)
        for i,j in nums3:
            d[i]+=j
        return sorted([[i,j] for i,j in d.items()])
