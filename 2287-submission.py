class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        dic = dict(collections.Counter(s))
        dic_target = dict(collections.Counter(target))
        min_res = 10**5
        for c in dic_target:
            if c not in dic:
                return 0
            if dic[c] // dic_target[c] < min_res:
                min_res = dic[c] // dic_target[c]
        return min_res
        
