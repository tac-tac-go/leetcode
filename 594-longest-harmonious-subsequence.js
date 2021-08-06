var findLHS = function(nums) {
  nums.sort((a,b) => a-b);
  let start = 0;
  let res = 0;
  let next = 0;
  for(let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[start] > 1) {
      start = ++next;
    } else if (nums[i] - nums[start] === 1) {
      res = Math.max(i - start +1, res);
    } else {
      ++next;
    }
  }
  return res;
}
