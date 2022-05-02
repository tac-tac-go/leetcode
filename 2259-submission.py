class Solution:
    def removeDigit(self, number: str, digit: str) -> str:
        max_v = 0
        for i in range(len(number)):
            if number[i]==digit:
                v = int(number[:i]+number[i+1:])
                if max_v < v:
                    max_v = v
        return str(max_v)
        
