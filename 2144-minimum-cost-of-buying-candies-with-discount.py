class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        cost_c = list(sorted(cost)[::-1])
        value = 0
        for i in range(len(cost)):
            if (i+1)%3==0:
                continue
            else:
                value+=cost_c[i]
        return value

