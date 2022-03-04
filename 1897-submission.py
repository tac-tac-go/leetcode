class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        from collections import Counter
        word = "".join(words)
        word_c = Counter(word)
        for v in word_c.values():
            if v%len(words)!=0:
                return False
        return True
