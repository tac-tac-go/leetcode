class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]):
        count = 0
        while len(sum(grid,[])) != 0:
            tmp = []
            tmp_m = []
            for i in range(len(grid)):
                tmp_m.append(max(grid[i]))
                max_i = grid[i].index(max(grid[i]))
                tmp.append(grid[i][:max_i]+grid[i][max_i+1:])
            grid = tmp   
            count += max(tmp_m)
        return count
