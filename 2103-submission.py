class Solution:
    def countPoints(self, rings: str) -> int:
        array = [[0]*3 for i in range(100)] #RGB
        for i in range(0,len(rings),2):
            color = rings[i:i+2]
            v1 = color[0]
            v2 = int(color[1])
            if v1=="R":
                array[v2][0]=1
            elif v1=="G":
                array[v2][1]=1
            elif v1=="B":
                array[v2][2]=1
        return sum([1 for i in array if i==[1,1,1]])
        
