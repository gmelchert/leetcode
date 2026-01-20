function isIsomorphic(s: string, t: string): boolean {
    const map = new Map<string, string>();

    for (let c = 0; c < s.length; c++) {
        const values = [...map.values()]
        if (!values.includes(t[c])) map.set(s[c], t[c]);
    }

    let mappedString = '';

    for (const letter of s) {
        mappedString += map.get(letter) || ``;
    }

    return mappedString === t;
};

function isIsomorphic1(s: string, t: string): boolean {
    const sMap: Record<string, string> = {};
    const tMap: Record<string, string> = {};

    for (let c = 0; c < s.length; c++) {
        const letterS = s[c];
        const letterT = t[c];

        if (
            sMap[letterS] && sMap[letterS] !== letterT ||
            tMap[letterT] && tMap[letterT] !== letterS
        ) return false;

        sMap[letterS] = letterT;
        tMap[letterT] = letterS;
    }

    return true;
};

console.log(isIsomorphic('badc', 'baba'));