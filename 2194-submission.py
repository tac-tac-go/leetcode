class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        alpha = "abcdefghijklmnopqrstuvwxyz".upper()
        v1,v2 = s.split(":")
        v1_1 = v1[0]
        v1_2 = int(v1[1])
        v2_1 = v2[0]
        v2_2 = int(v2[1])
        result = []
        for alpha_i in range(alpha.index(v1_1),alpha.index(v2_1)+1):
            for v_i in range(v1_2,v2_2+1):
                result.append(alpha[alpha_i]+str(v_i))
        return result
        
