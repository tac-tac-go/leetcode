class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:
        if target not in set(words):
            return -1
        if words[startIndex] == target:
            return 0
        
        n = len(words)
        words = words[:] + words + words[:]
        startIndex += n
        
        n = len(words)
        res = n
        i = startIndex
        for i in range(startIndex, n):
            if words[i] == target:
                res = min(res, i - startIndex)
                break
        for i in range(startIndex, -1, -1):
            if words[i] == target:
                res = min(res, startIndex - i)
                break
        
        return res
