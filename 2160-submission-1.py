class Solution:
    def minimumSum(self, num: int) -> int:
        import itertools
        num_array = list(str(num))
        max_v = 1000**100
        for i in list(itertools.permutations(num_array,4)):
            i1 = int("".join(i[0:2]))
            i2 = int("".join(i[2:]))
            if i1+i2<max_v:
                max_v = i1+i2
        return max_v
            
