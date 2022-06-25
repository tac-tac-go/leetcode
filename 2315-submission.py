class Solution:
    def countAsterisks(self, s: str) -> int:
        result = [v for i,v in enumerate(s.split("|")) if i%2==0]
        return sum([i.count("*") for i in result])
        
