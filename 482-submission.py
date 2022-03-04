class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        result = ''
        s_v = "".join(s.split("-"))[::-1]
        array = [s_v[i:i+k][::-1].upper() for i in range(0,len(s_v),k)][::-1]
        return "-".join(array)
            
            
