/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    var key = arr[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }
  let counts2 = new Array(1000);
  counts2.fill(0);
  for (const value in counts) {
    counts2[counts[value]] += 1;
  }
  let array_f = counts2.filter(v => {
    return v > 1;
  });
  return array_f.length == 0 ? true : false;
};
