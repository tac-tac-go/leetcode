/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let count=0
    for(let p1=3;p1<nums.length;p1++){
        for(let p2=2;p2<p1;p2++){
            for(let p3=1;p3<p2;p3++){
                for(let p4=0;p4<p3;p4++){  
                    if(nums[p1]==nums[p2]+nums[p3]+nums[p4] && p4<p3<p2<p1){
                        count+=1
                    }
                }
                
            }
        }
    }
    return count
    
};


