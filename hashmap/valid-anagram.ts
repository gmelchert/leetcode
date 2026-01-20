function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    
    const map = new Map<string, number>();

    for (const letter of s) {
        const count = map.get(letter);
        (!count) ? map.set(letter, 1) : map.set(letter, count + 1);
    }

    for (const letter of t) {
        const count = map.get(letter);
        if (!count) return false;

        map.set(letter, count - 1);
    }

    return true;
};

console.log()