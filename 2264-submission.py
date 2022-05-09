class Solution:
    def largestGoodInteger(self, num: str) -> str:
        result = ''
        max_v = -1
        for i in range(0,len(num)-2):
            if len(set(list(num[i:i+3])))==1:
                if int(num[i:i+3]) > max_v:
                    result = num[i:i+3]
                    max_v = int(num[i:i+3])
        return result
        
