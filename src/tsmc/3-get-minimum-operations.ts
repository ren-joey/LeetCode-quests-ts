/**
 * 3. Flip Operations

A tree of
𝑛
n nodes is an undirected connected graph having
(
𝑛
−
1
)
(n−1) edges. Given an undirected tree comprising of tree_nodes number of nodes numbered from 0 to tree_nodes - 1, and rooted at node 0. Each node has an initially binary value (0 or 1) represented by the array initial[], and an expected binary value represented by the array expected[].

The following operation can be performed on the tree any number of times:

Pick a node u and flip its value. Also, flip the value of all the nodes in the subtree of u if
𝑣
%
2
=
𝑢
%
2
v%2=u%2. A node v lies in the subtree of u if u lies on the path from v to root. Flipping the value of a node means flipping its binary value, i.e., from 0 to 1, and vice versa.
The tree is represented by the arrays tree_from[] and tree_to[] where tree_from[i] is connected to tree_to[i] via an edge for 0 \leq i < \text{tree_nodes} - 1. Find the minimum number of operations needed such that the final binary value of each node becomes equal to the array expected[].

Example:
Consider the following:

tree_nodes = 4
initial = [1, 1, 0, 1]
expected = [0, 1, 1, 0]
tree_from = [0, 0, 1]
tree_to = [1, 2, 3]
The nodes are labeled <node number>:<value>.
 */

// 'use strict';

// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }


/*
 * Complete the 'getMinimumOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. UNWEIGHTED_INTEGER_GRAPH tree
 *  2. INTEGER_ARRAY initial
 *  3. INTEGER_ARRAY expected
 */

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i].
 *
 */

export const getMinimumOperations = (treeNodes: number, treeFrom: number[], treeTo: number[], initial: number[], expected: number[]): number => {
    const graph: number[][] = Array.from({ length: treeNodes }, () => []);
    const depthMap: number[] = new Array(treeNodes).fill(0);

    for (let i = 0; i < treeFrom.length; i += 1) {
        graph[treeFrom[i]].push(treeTo[i]);
        graph[treeTo[i]].push(treeFrom[i]);
    }

    let flipCount = 0;
    const dfs = (node: number, parent: number, oddFlip: number, evenFlip: number) => {
        const depth = parent === -1 ? 0 : depthMap[parent] + 1;
        depthMap[node] = depth;

        const shouldFlip = depth % 2 === 1 ? oddFlip : evenFlip;
        const actualValue = (initial[node] + shouldFlip) % 2;

        if (actualValue !== expected[node]) {
            flipCount += 1;
            if (depth % 2 === 0) evenFlip += 1;
            else oddFlip += 1;
        }

        for (const neighbor of graph[node]) {
            if (neighbor !== parent) dfs(neighbor, node, oddFlip, evenFlip);
        }
    };

    dfs(0, -1, 0, 0);

    return flipCount;
};

// function main() {
//     const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

//     const treeNodesEdges: string[] = readLine().split(' ');

//     const treeNodes: number = parseInt(treeNodesEdges[0], 10);
//     const treeEdges: number = parseInt(treeNodesEdges[1], 10);

//     const treeFrom: number[] = [];
//     const treeTo: number[] = [];

//     for (let i: number = 0; i < treeEdges; i++) {
//         const treeFromTo = readLine().split(' ');

//         treeFrom.push(parseInt(treeFromTo[0], 10));
//         treeTo.push(parseInt(treeFromTo[1], 10));
//     }

//     const initialCount: number = parseInt(readLine().trim(), 10);

//     const initial: number[] = [];

//     for (let i: number = 0; i < initialCount; i++) {
//         const initialItem: number = parseInt(readLine().trim(), 10);

//         initial.push(initialItem);
//     }

//     const expectedCount: number = parseInt(readLine().trim(), 10);

//     const expected: number[] = [];

//     for (let i: number = 0; i < expectedCount; i++) {
//         const expectedItem: number = parseInt(readLine().trim(), 10);

//         expected.push(expectedItem);
//     }

//     const result: number = getMinimumOperations(treeNodes, treeFrom, treeTo, initial, expected);

//     ws.write(result + '\n');

//     ws.end();
// }
