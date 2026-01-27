function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let prefix = strs[0];

    for (let c = 1; c < strs.length; c++) {
        const word = strs[c];
        let newPrefix = '';

        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] === word[i]) {
                newPrefix += word[i];
            } else {
                break;
            }
        }

        prefix = newPrefix;
    };

    return prefix;
};