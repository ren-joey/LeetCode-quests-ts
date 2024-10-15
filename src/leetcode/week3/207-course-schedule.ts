/**
 * 207. Course Schedule
 * Algorithm: Topological Sort
 * https://leetcode.com/problems/course-schedule/
 */

export const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
    const adjList: number[][] = [];
    const indegrees: number[] = new Array(numCourses).fill(0);

    prerequisites.some((pre) => {
        adjList.push(pre);
        indegrees[pre[0]] += 1;
    });

    while(indegrees.includes(0)) {
        const idx = indegrees.indexOf(0);

        for (let i = adjList.length - 1; i >= 0; i -= 1) {
            if (adjList[i][1] === idx) {
                const adj = adjList.splice(i, 1)[0];
                indegrees[adj[0]] -= 1;
            }
        }

        indegrees[idx] = -1;
    }

    return adjList.length === 0;
};