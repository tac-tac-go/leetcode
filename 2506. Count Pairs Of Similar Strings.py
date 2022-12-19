class Solution:
    def similarPairs(self, words: List[str]) -> int:
        count = 0
        for i in range(len(words)-1):
            for j in range(i+1,len(words)):
                a = set(list(words[i]))
                b = set(list(words[j]))
                c = a-b if len(a) >= len(b) else b-a
                if len(c)==0:
                    count += 1
        return count
