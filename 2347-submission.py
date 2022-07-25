class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        from collections import Counter
        array1 = list(Counter(ranks).values())
        array2 = list(Counter(suits).values())
        
        if len(array2)==1:
            return "Flush"
        
        if max(array1)>=3:
            return "Three of a Kind"
        
        if max(array1)>=2:
            return "Pair"
        
        return "High Card"
        
