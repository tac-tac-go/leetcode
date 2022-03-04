class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        array = [[index,i,j] for index,(i,j) in enumerate(points) if i==x or j==y]
        if len(array)==0:
            return -1
        else:
            dis = list(map(lambda xy:[xy[0],abs(xy[1]-x)+abs(xy[2]-y)],array))
            array2 = sorted(dis,key=lambda x:(x[1],x[0]))
            return array2[0][0]
