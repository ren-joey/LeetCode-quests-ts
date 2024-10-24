/**
 * Definition for _Node.
 */

export class _Node {
    val: number;
    neighbors: _Node[];

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val);
        this.neighbors = (neighbors===undefined ? [] : neighbors);
    }
}

export class VisitedNode extends _Node {
    visited: boolean;

    constructor(val?: number, neighbors?: _Node[], visited?: boolean) {
        super(val, neighbors);
        this.visited = (visited === undefined ? false : visited);
    }
}