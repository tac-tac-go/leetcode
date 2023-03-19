class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        x = format(n,"b")
        result=[0,0]
        for i,v in enumerate(x[::-1]):
            if i%2==0 and v=="1":
                result[0]+=1
            elif i%2==1 and v=="1":
                result[1]+=1
        return result
            
            

