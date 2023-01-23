class Solution:
    def alternateDigitSum(self, n: int) -> int:
        digit = 1
        sum_v = 0
        for i in list(str(n)):
            sum_v += digit*int(i)
            digit *= -1
        return sum_v
