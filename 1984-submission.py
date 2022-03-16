class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        if k==1:
            return 0
        else:
            nums_c = sorted(nums)[::-1]
            min_v = 10**9   
            for i in range(len(nums)-k+1):
                if min_v > abs(nums_c[i]-nums_c[i+k-1]):
                    min_v = abs(nums_c[i]-nums_c[i+k-1])
            return min_v
            
            
