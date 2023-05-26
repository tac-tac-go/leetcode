class Solution:
    def countSeniors(self, details: List[str]) -> int:
        result = list(filter(lambda x:int(x[11:13])>60,details))
        return len(result)
        
