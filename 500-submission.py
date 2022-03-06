class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        first = "qwertyuiop"
        second = "asdfghjkl"
        third = "zxcvbnm"
        result = []
        for word in words:
            tmp = []
            for char in list(set(word)):
                char = char.lower()
                if char in first:
                    tmp.append(1)
                elif char in second:
                    tmp.append(2)
                else:
                    tmp.append(3)
            if len(list(set(tmp)))==1:
                result.append(word)
        return result
                    
