class Solution:
	def removeAnagrams(self, words: List[str]) -> List[str]:
		res = []
		for word in words:
			s = [0] * 26
			for c in word:
				s[ord(c) - ord("a")] += 1
			if not res or tuple(s) != tuple(res[-1][1]):
				res.append([word, s])
		return [i[0] for i in res]
