class Solution:
    def digitCount(self, num: str) -> bool:
        from collections import Counter
        s_c = dict(sorted(Counter(list(num)).items()))
        flag = True
        for i in range(0,len(num)):
            if s_c.get(str(i),0)!=int(num[i]):
                flag = False
                break
        return flag
            
        
