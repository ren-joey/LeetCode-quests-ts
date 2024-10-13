export class Node {
    val: number;
    min: number;
    next: Node | null;

    constructor(val: number, min: number, next: Node | null = null) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}
