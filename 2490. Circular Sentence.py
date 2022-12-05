class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        word_s = sentence.split(" ")
        if sentence[0] != sentence[-1]:
            return False
        for i in range(len(word_s)-1):
            if word_s[i][-1]!=word_s[i+1][0]:
                return False
        return True

