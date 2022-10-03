class Solution:
    def equalFrequency(self, word: str) -> bool:
        from collections import Counter
        array = list(Counter(list(word)).values())
        flag = False
        for i in range(len(array)):
            array2 = list(array)
            array2[i] -= 1
            array2 = list(filter(lambda x:x>0,array2))
            if len(list(set(array2)))==1:
                flag = True
                break
        return flag
        
