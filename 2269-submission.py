class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        count = 0
        for i in range(0,len(str(num))-k+1):
            judge = str(num)[i:i+k]
            if int(judge)!=0:
                if num%int(judge)==0:
                    count +=1
        return count
        
