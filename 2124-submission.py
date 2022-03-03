class Solution:
    def checkString(self, s: str) -> bool:
        if ("a" in s) and ("b" in s):
            return  True if s.rfind("a") < s.find("b") else False
        else:
            return True
