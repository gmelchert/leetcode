function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = Array.from({ length: numCourses }, () => [] as number[]);
    const indegree = Array(numCourses).fill(0);

    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        indegree[a]++;
    }

    const queue: number[] = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;

    while (queue.length > 0) {
        const course = queue.shift()!;
        completed++;

        for (const next of graph[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
};