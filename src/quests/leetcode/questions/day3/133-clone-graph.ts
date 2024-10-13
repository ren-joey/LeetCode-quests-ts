/**
 * 133. Clone Graph
 * Algorithm: Graph, DFS, BFS
 * https://leetcode.com/problems/clone-graph/
 */

import { _Node } from "../classes/_node";

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */


export const cloneGraph = (node: _Node | null): _Node | null => {
    if (node === null) return null;

    const visited: _Node[] = [];

    const miner = (node: _Node, c_node: _Node) => {
        c_node.val = node.val;
        visited[node.val] = c_node;

        node.neighbors.forEach((n_node) => {
            if (visited[n_node.val]) {
                const c_n_node = visited[n_node.val];
                c_node.neighbors.push(c_n_node);
            } else if (!visited[n_node.val]) {
                const c_n_node = new _Node(node.val);
                c_node.neighbors.push(c_n_node);
                miner(n_node, c_n_node);
            }
        });
    };

    const root = new _Node();
    miner(node, root);
    return root;
};