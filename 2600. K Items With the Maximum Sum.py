class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        array = sorted([1]*numOnes + [0]*numZeros + [-1]*numNegOnes)[::-1]
        return sum(array[:k])
        
