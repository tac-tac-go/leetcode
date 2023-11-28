class Solution {
  int distributeCandies(int n, int limit) {
    var count = 0;
    for(var i =0;i<=limit;i++){
        for(var j=0;j<=limit;j++){
            for(var k=0;k<=limit;k++){
                var sum = [i,j,k].reduce((a,b) => a+b);
                if(sum==n){
                    count +=1;
                }
            }
        }
    }
    return count;
  }
}
