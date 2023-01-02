class Solution:
    def countDigits(self, num: int) -> int:
        digit,count = str(num),0
        for i in digit:
            if num % int(i) ==0:
                count += 1
        return count
