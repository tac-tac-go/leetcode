class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        return max([int(str_i) if str_i.isdigit() else len(str_i) for str_i in strs])
