class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        max_v = 0
        for sentence in sentences:
            sentence_s = sentence.split(" ")
            if max_v < len(sentence_s):
                max_v = len(sentence_s)
        return max_v
