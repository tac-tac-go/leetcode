/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
    var even=[];
    var odd=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            even.push(nums[i]);
        }else{
            odd.push(nums[i]);
        }
    }
    
    var nums_r = even.concat(odd);
    
    var half_e=nums_r.slice(0,nums.length/2);
    var half_o=nums_r.slice(nums.length/2);
    
    
    var index=1;
    for(let i=0;i<half_o.length;i++){
        half_e.splice(index,0,half_o[i]);
        index+=2;
    }
    return half_e;
};
