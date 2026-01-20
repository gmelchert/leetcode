function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)

    const result: number[][] = [];

    for (let numIndex in nums) {
        const num = nums[numIndex];

        if (+numIndex > 0 && num === nums[+numIndex - 1]) continue;

        const target = num * -1;

        let left = +numIndex + 1;
        let right = nums.length - 1;

        if (left === right) break;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum == target) {
                result.push([num, nums[left], nums[right]]);
                break;
            } else {
                sum > target ? right-- : left++;
            }
        }
    }

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))