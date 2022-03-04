class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        array = [min(rect) for rect in rectangles]
        return len(list(filter(lambda x:x==max(array),array)))
