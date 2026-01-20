function wordPattern(pattern: string, s: string): boolean {
    const hashMapPS = new Map<string, string>();
    const hashMapSP = new Map<string, string>();

    const words = s.split(' ');

    if (words.length !== pattern.length) return false;

    for (let c = 0; c < pattern.length; c++) {
        const patternLetter = pattern[c];
        const word = words[c];

        if (
            hashMapPS.get(patternLetter) && hashMapPS.get(patternLetter) !== word ||
            hashMapSP.get(word) && hashMapSP.get(word) !== patternLetter
        ) {
            return false;
        }

        hashMapPS.set(patternLetter, word);
        hashMapSP.set(word, patternLetter);
    }

    return true;
};

console.log(wordPattern(`abba`, 'dog cat cat dog'))
console.log(wordPattern(`abba`, 'dog cat cat fish'))
console.log(wordPattern(`abba`, 'dog dog dog dog'))
console.log(wordPattern(`aaa`, 'aa aa aa aa'))