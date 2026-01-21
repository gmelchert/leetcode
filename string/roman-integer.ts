function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let result: number = 0;

    for (let i = 0; i < s.length; i++) {
        let value = map.get(s[i])!;
        const nextValue = map.get(s[i + 1]);

        if (nextValue && nextValue > value) {
            result += nextValue - value;
            i++;
        } else {
            result += value;
        }
    }

    return result;
};

console.log(romanToInt('XIV'))