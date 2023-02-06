class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        return map(int,list("".join(map(str,nums))))
