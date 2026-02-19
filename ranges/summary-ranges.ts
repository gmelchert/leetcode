function summaryRanges(nums: number[]): string[] {
    const set = new Set(nums);

    const result: string[] = [];
    
    let startNewRange = ``;
    set.forEach(n => {
        if (!startNewRange && !set.has(n + 1)) {
            return result.push(n.toString());
        }

        if (!startNewRange) {
            startNewRange = n.toString();
        }

        if (!set.has(n + 1)) {
            result.push(`${startNewRange}->${n}`);
            startNewRange = '';
        }
    })
    if (startNewRange) {
        result.push(startNewRange);
    }

    return result;
};
console.log(summaryRanges([0,2,3,4,6,8,9]))