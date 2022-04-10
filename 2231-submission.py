class Solution:
    def largestInteger(self, num: int) -> int:
        even = []
        odd = []
        for i,v in enumerate(list(str(num))):
            if int(v)%2 == 1:
                odd.append(int(v))
            else:
                even.append(int(v))
        even = sorted(even)[::-1]
        odd = sorted(odd)[::-1]
        
        result = ""
        ret = ''
        for i,v in enumerate(list(str(num))):
            if int(v)%2==1:
                ret = odd.pop(0)
            else:
                ret = even.pop(0)
            result+=str(ret)
        return result
