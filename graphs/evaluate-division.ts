function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph = new Map<string, Map<string, number>>();

    for (let i in equations) {
        const [a, b] = equations[i];
        const value = values[i];

        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());

        graph.get(a)!.set(b, value);
        graph.get(b)!.set(a, 1 / value);
    }

    const dfs = (curr: string, target: string, visited: Set<string>): number => {
        if (!graph.has(curr) || visited.has(curr)) return -1;
        if (curr === target) return 1;

        visited.add(curr);

        for (const [neighbor, value] of graph.get(curr)!) {
            if (!visited.has(neighbor)) {
                const res = dfs(neighbor, target, visited);
                if (res !== -1) {
                    return value * res;
                }
            }
        }

        return -1;
    }

    const results: number[] = [];
    for (const [start, end] of queries) {
        if (!graph.has(start) || !graph.has(end)) {
            results.push(-1);
        } else {
            results.push(dfs(start, end, new Set()));
        }
    }

    return results;
};