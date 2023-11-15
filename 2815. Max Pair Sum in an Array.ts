function max_digit(input) {
    let numArr = input.toString().split('').map(v => Number(v));
    return Math.max(...numArr)
}

function maxSum(nums: number[]): number {
    let result = -1
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]>result && max_digit(nums[i])==max_digit(nums[j])){
                console.log(nums[i],nums[j])
                result = nums[i]+nums[j]
            }
        }
    }
    return result
};
