class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        if len(str(num))>1:
            if str(num)[::-1][0]=="0":
                return False
        return True
