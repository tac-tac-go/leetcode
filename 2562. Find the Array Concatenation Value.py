class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        result = 0
        while len(nums)>=2:
            f_i = nums[0]
            l_i = nums[-1]
            result += int(str(f_i)+str(l_i))
            del nums[0]
            del nums[-1]
        return result+nums[0] if len(nums)==1 else result

