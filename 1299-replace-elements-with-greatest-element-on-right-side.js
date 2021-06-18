/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  for(let i=0;i<arr.length-1;i++){
      arr[i]=arr.slice(i+1).reduce((a,b) => Math.max(a,b))
  }
  arr[arr.length-1]=-1
  return arr
};
