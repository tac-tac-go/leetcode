class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        result = []
        for i in range(0,len(s),k):
            result.append(s[i:i+k].ljust(k,fill))
        return result
        
