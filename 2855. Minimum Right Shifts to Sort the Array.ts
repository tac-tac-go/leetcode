const arrRotateRight= (a,n)=>{while (n>0) {a.unshift(a.pop());n--;}return a;};

const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);

function minimumRightShifts(nums: number[]): number {
    for(let i=0;i<nums.length;i++){
        if(isSorted(arrRotateRight([...nums],i)))return i
    }
    return -1
};
