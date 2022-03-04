class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        array = sorted(boxTypes,key=lambda x:(-x[1],x[0]))
        count = 0
        i = 1
        value = 0
        for i,j in array:
            if value+i<=truckSize:
                value+=i
                count+=(i*j)
            else:
                count+=(truckSize-value)*j
                break
        return count
