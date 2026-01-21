function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree: number[] = Array(numCourses).fill(0);

    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        indegree[a]++;
    }

    const queue: number[] = [];
    const order: number[] = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const course = queue.shift()!;
        order.push(course);

        for (const next of graph[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return order.length === numCourses ? order : [];
};