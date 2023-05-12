var chunk = function(arr, size) {
    let rp_c = Math.ceil(arr.length/size);
    let result = []
    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result
};
