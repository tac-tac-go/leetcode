class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        tmp = word
        ret = 0
        while tmp in sequence:
            tmp+=word
            ret+=1
        return ret
