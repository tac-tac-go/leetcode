class Solution:
    def countPrefixes(self, words: List[str], s: str) -> int:
        count = 0
        for i in range(len(s)):
            count += len(list(filter(lambda x:x==s[0:i+1],words)))
        return count
        
