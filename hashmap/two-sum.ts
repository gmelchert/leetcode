function twoSum(nums: number[], target: number) {
    const numsHashMap = new Map<number, number>();

    for (let c = 0; c < nums.length; c++) {
        if (numsHashMap.has(nums[c])) {
            return [numsHashMap.get(nums[c])!, c]
        }

        numsHashMap.set(target - nums[c], c);
    };
};

console.log(twoSum([3,2,4], 6));