function minOperations(nums: number[], k: number): number {
    let result = []
    let range_l = [...Array(k).keys()].map(v => v+1)
    let length = nums.length;
    let count = 0;
    for(let i=0;i<length;i++){
        let poppedElement = nums.pop();
        result.push(poppedElement)
        count +=1
        if(range_l.filter(v => !result.includes(v)).length==0)break
    }
    return count
};
