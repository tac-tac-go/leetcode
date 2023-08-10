class ArrayWrapper {
	constructor(private nums: number[]) {}

	valueOf() {
       return this.nums.reduce((a,b) => a+b,0);
    }

	toString() {
        return JSON.stringify(this.nums);
    }
};
