function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [];
    let curr = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];

        if (curr[1] >= next[0]) {
            curr[1] = Math.max(curr[1], next[1]);
        } else {
            merged.push(curr);
            curr = next;
        }
    }
    merged.push(curr);

    return merged;
};