class Solution {
  int countPairs(List<int> nums, int target) {
      var count = 0;
      for(var i=0;i<nums.length-1;i++){
          for(var j=i+1;j<nums.length;j++){
              if(nums[i]+nums[j]<target){
                  count +=1;
              }
          }
      }
      return count;
  }
}
