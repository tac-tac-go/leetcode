class Solution:
    def repeatedCharacter(self, s: str) -> str:
        from collections import Counter
        array = dict(Counter(list(s)))
        dict_k = [i for i,v in array.items() if v>=2]
        result = []
        for i in dict_k:
            result.append(s.find(i, s.find(i)+1))
        return dict_k[result.index(min(result))]
            
