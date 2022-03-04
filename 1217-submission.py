class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        even = []
        odd = []
        for i in position:
            if i%2==0:even.append(i)
            else:odd.append(i)    
        if len(odd)>=len(even):
            return len(even)
        else:
            return len(odd)
