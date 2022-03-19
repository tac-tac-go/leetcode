class Solution:
    def checkOnesSegment(self, s: str) -> bool:
        ones = 0
        result = []
        s += "0"
        for c in s:
            if c == '1':
                ones += 1     
            else:
                result.append(ones)
                ones = 0
               
        result = list(filter(lambda x:x!=0,result))
        return True if len(result)==1 else False
