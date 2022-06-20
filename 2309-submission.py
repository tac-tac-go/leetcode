class Solution:
    def greatestLetter(self, s: str) -> str:
        alpha_l = list("abcdefghijklmnopqrstuvwxyz")
        alpha_u = list(map(lambda x:x.upper(),alpha_l))
        result = ""
        for i,(v1,v2) in enumerate(zip(alpha_l,alpha_u)):
            if s.count(v1)>0 and s.count(v2)>0:
                result = v2
        return result
        
