class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        from collections import defaultdict
        result = defaultdict(int)
        array = items1 + items2
        for i,v in array:
            result[i]+=v
        return sorted([[i,v] for i,v in result.items()])
        
