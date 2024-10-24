/**
 * 323. Number of Connected Components in an Undirected Graph
 * Algorithm: DFS
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 *
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 * Return the number of connected components in the graph.
 *
 * Example 1:
 *      Input: n = 5, edges = [[0,1],[1,2],[3,4]]
 *      Output: 2
 *
 * Example 2:
 *      Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
 *      Output: 1
 *
 * Constraints:
 *      1 <= n <= 2000
 *      1 <= edges.length <= 5000
 *      edges[i].length == 2
 *      0 <= ai <= bi < n
 *      ai != bi
 *      There are no repeated edges.
 *
 * References:
 *      https://www.cnblogs.com/cnoodle/p/14197652.html
 */

export const countComponents = (n: number, edges: number[][]): number => {
    if (n === 0) return 0;

    const nodes: {[n: number]: Set<number>} = {};
    const visited: boolean[] = Array(n).fill(false);
    const queue: number[] = [edges[0][0]];
    let count = 0;

    edges.forEach(([from, to]) => {
        if (!nodes[from]) nodes[from] = new Set();
        if (!nodes[to]) nodes[to] = new Set();

        nodes[from].add(to);
        nodes[to].add(from);
    });

    for (const node in nodes) {
        if (visited[node]) continue;
        else if (queue.length === 0) queue.push(+node);
        count += 1;

        while (queue.length) {
            const node = queue.shift()!;
            visited[node] = true;

            for (const neighbor of nodes[node]) {
                if (!visited[neighbor]) queue.push(neighbor);
            }
        }
    }

    return count;
};