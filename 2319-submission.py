class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        array = [i for i in range(len(grid))]
        array_r = array[::-1]
        pattern1 = [(i,j) for i,j in zip(array,array)]
        pattern2 = [(i,j) for i,j in zip(array,array_r)]
        flag = True
        for i in range(len(grid)):
            for j in range(len(grid)):
                if (i,j) in pattern1 or (i,j) in pattern2:
                    if grid[i][j]!=0:
                        continue
                    else:
                        flag = False
                        break
                else:
                    if grid[i][j]==0:
                        continue
                    else:
                        flag = False
                        break
            else:
                continue
            break
        return True if flag else False
