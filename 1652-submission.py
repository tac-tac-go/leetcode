class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        code_c = [0]*len(code)
        if k>0:
            for i in range(len(code)):
                for k_v in range(i+1,i+k+1):
                    code_c[i]+=code[k_v%len(code)]
            return code_c
        elif k<0:
            for i in range(len(code)):
                for k_v in range(i-1,i+k-1,-1):
                    code_c[i]+=code[k_v]   
            return code_c
        else:
            return code_c
            
