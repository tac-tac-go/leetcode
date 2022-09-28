class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        array = [(i,j) for i,j in zip(names,heights)]
        array = sorted(array,key=lambda x:-x[1])
        return [i for i,j in array]
        
