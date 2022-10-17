class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        pos_a = sorted(filter(lambda x:x>0,nums))[::-1]
        neg_a = list(map(lambda x:abs(x),filter(lambda x:x<0,nums)))
        if len(pos_a)==0:
            return -1        
        
        flag = False
        v = 0
        for i in pos_a:
            if i in neg_a:
                flag = True
                v = i
                break
        return v if flag else -1
        

