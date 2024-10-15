/**
 * 232. Implement Queue using Stacks
 * Algorithm: Stack
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

export class MyQueue {
    top: number|undefined;
    stack1: number[];
    size1: number;
    stack2: number[];
    size2: number;

    constructor() {
        this.top = undefined;
        this.stack1 = [];
        this.size1 = 0;
        this.stack2 = [];
        this.size2 = 0;
    }

    push(x: number): void {
        if (this.size1 === 0) this.top = x;
        this.stack1.push(x);
        this.size1 += 1;
    }

    pop(): number {
        for (let i = 0; i < this.size1 - 1; i += 1) {
            const num = this.stack1.pop() as number;
            if (i === this.size1 - 2) this.top = num;
            this.stack2.push(num);
            this.size2 += 1;
        }
        const res = this.stack1.pop();
        for (let i = 0; i < this.size2; i += 1) {
            const num = this.stack2.pop() as number;
            this.stack1.push(num);
        }
        this.size1 -= 1;
        this.size2 = 0;

        return res as number;
    }

    peek(): number {
        return this.top as number;
    }

    empty(): boolean {
        return this.stack1.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */