class Solution {
  bool isAcronym(List<String> words, String s) {
      return words.map((e) => e[0]).join()==s;
  }
}
