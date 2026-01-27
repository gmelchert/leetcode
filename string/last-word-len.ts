function lengthOfLastWord(s: string): number {
    let len = 0;
    s.split(' ').forEach(element => {
        if (!element) return;
        len = element.length;
    });
    return len;
};