function simplifyPath(path: string): string {
    let paths: string[] = [];

    const split = path.split('/');
    split.forEach(v => {
        if (!v) return;

        if (v == '.') return;
        if (v == '..') return paths.pop();

        paths.push(v);
    });
    if (!paths.length) return '/';

    return `/${paths.join('/')}`;
};