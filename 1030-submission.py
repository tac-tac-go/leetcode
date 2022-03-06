class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        x = rows
        y = cols
        result = []
        for xi in range(x):
            for yi in range(y):
                result.append([[abs(rCenter-xi)+abs(cCenter-yi),[xi,yi]]])
        result = list(sorted(result))
        result2 =[]
        for j in result:
            result2.append(j[0][1])
        return result2
        
        
