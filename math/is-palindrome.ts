function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    let curr = x;
    let nums = [];

    while (curr >= 10) {
        const n = curr % 10;
        nums.push(n);
        curr = Math.floor(curr / 10);
    }

    nums.push(curr);
    let power = nums.length - 1;

    let inverse = 0;
    for (const n of nums) {
        inverse += n * Math.pow(10, power);
        power--;
    }

    return inverse === x;
};