class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        result = [0]
        for i in range(len(s)):
            for j in range(i+1,len(s)+1):
                s2 = str(s[i:j])
                if s2.count("0") == s2.count("1") and s2.find("1")>s2.rfind("0"):
                    result.append(len(s2))
        return max(result)
