function countPairs(nums: number[], target: number): number {
    let count = 0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]<target){
                count+=1
            }
        }
    }
    return count
};
