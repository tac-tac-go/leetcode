class Solution:
    def pivotInteger(self, n: int) -> int:
        if n==1:
            return 1
        array = list(range(1,n+1))
        for i in range(1,n):
            if sum(array[:i])==sum(array[i-1:]):
                return i
        return -1


