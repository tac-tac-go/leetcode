class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return True if "".join(sorted(list(s)))=="".join(sorted(list(t))) else False
        
