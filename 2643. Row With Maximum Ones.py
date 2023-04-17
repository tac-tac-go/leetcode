class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        count = [i.count(1) for i in mat]
        return [count.index(max(count)),max(count)]
