class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        start_b = str(format(start,'b'))
        goal_b = str(format(goal,'b'))
        l_m = max(len(start_b),len(goal_b))
        start_b = list(start_b.zfill(l_m))
        goal_b = list(goal_b.zfill(l_m))
        return sum([1 for i,j in zip(start_b,goal_b) if i!=j])
        
        
