function isValid(s: string): boolean {
    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ]);

    for (let c of s) {
        if (map.has(c)) {
            stack.push(c);
        } else {
            const pop = stack.pop()!;
            if (map.get(pop)! !== c) return false;
        }
    }

    return stack.length === 0;
};