/**
 * TODO:
 * 261. Graph Valid Tree
 * Algorithm: BFS
 * https://leetcode.com/problems/graph-valid-tree/
 *
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 *
 * Example 1:
 *      Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 *      Output: true
 *
 * Example 2:
 *      Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 *      Output: false
 *
 * Constraints:
 *      1 <= n <= 2000
 *      0 <= edges.length <= 5000
 *      edges[i].length == 2
 *      0 <= ai, bi < n
 *      ai != bi
 *      There are no self-loops or repeated edges.
 *
 * References:
 *      https://www.cnblogs.com/grandyang/p/5257919.html
 */

export const validTree = (n: number, edges: number[][]): boolean => {
    console.log(n, edges);

    // create graph
    const graph: number[][] = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1]);
        graph[edges[i][1]].push(edges[i][0]);
    }

    const visited: boolean[] = new Array(n).fill(false);
    const queue: number[] = [0];

    while (queue.length > 0) {
        const cur = queue.shift()!;
        if (visited[cur]) {
            return false;
        }

        visited[cur] = true;
        for (const nei of graph[cur]) {
            // need to check if the neighbor is visited,
            // because it's an undirected graph
            if (!visited[nei]) {
                queue.push(nei);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            return false;
        }
    }

    return true;
};
