class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        value = []
        result = []
        for i in range(1,n+1):
            if value==target:
                break
            
            if i in target:
                result.append("Push")
                value.append(i)
            else:
                result.append("Push")
                result.append("Pop")
        return result
                
            
            
