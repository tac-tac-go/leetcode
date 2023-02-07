class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for i in range(k):
            max_i = gifts.index(max(gifts))
            gifts[max_i] = int(gifts[max_i]**0.5)
        return sum(gifts)
