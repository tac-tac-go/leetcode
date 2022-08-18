class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return format(int(str(a),2)+int(str(b),2),"b")
        
        
