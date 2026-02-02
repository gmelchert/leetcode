function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = nums[mid];

        if (num === target) {
            return mid;
        }

        if (num > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}