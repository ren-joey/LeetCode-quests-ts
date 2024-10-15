/**
 * 155. Min Stack
 * Algorithm: Stack
 * https://leetcode.com/problems/min-stack/
 */

import { Node } from "../classes/node";

export class MinStack {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    push(val: number): void {
        if (this.head === null) this.head = new Node(val, val);
        else this.head = new Node(val, Math.min(val, this.head.min), this.head);
    }

    pop(): void {
        this.head = this.head?.next || null;
    }

    top(): number {
        if (this.head === null) throw new Error('Error: Stack is empty');
        return this.head.val;
    }

    getMin(): number {
        if (this.head === null) throw new Error('Error: Stack is empty');
        return this.head.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */