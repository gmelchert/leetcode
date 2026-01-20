function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineLetters = magazine.split('');
    for (let c = 0; c < ransomNote.length; c++) {
        const letter = ransomNote[c];
        const letterIndex = magazineLetters.indexOf(letter);

        if (letterIndex === -1) {
            return false;
        } else {
            magazineLetters.splice(letterIndex, 1)
        }
    }

    return true;
};

function canConstruct1(ransomNote: string, magazine: string): boolean {
    const hashMap = new Map<string, number>();

    for (const letter of ransomNote) {
        const startIndex = hashMap.get(letter) || 0;

        const letterIndex = magazine.indexOf(letter, startIndex);
        if (letterIndex === -1) return false;

        hashMap.set(letter, letterIndex + 1);
    }

    return true;
}