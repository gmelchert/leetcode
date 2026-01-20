function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        const leftContainer = height[left];
        const rightContainer = height[right];

        console.log({right, left, leftContainer, rightContainer})

        const newArea = (right - left) * Math.min(leftContainer, rightContainer);
        maxArea = Math.max(maxArea, newArea);

        if (leftContainer > rightContainer) {
            right--;
        } else {
            left++;
        }
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))