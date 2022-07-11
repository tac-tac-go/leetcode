class Solution:
    def fillCups(self, amount: List[int]) -> int:
        c= 0
        while set(amount) !=0 :
            amount.sort(reverse= True)
            if amount[0]>=1 and amount[1]>=1:
                c=c+1
                amount[0]= amount[0]-1
                amount[1] = amount[1] - 1

            else:
                c=c + amount[0]
                break
        return (c)
        
