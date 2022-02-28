class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0
        for s in words:
            if s.startswith(pref):
                count+=1
        return count
