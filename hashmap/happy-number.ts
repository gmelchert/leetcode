function isHappy(n: number): boolean {
    const seen = new Set<number>();

    const getNext = (num: number): number => {
        let totalSum = 0;
        while (num > 0) {
            const digit = num % 10;
            totalSum += digit ** 2;
            num = Math.floor(num / 10);
        };
        return totalSum;
    }

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};