// 141-linked-list-cycle.ts

/**
 * 141. Linked List Cycle
 * Algorithm: Linked List
 * https://leetcode.com/problems/linked-list-cycle/
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export const hasCycle = (head: ListNode | null): boolean => {
    if (head === null) return false;

    let slow_ptr = head;
    let fast_ptr = head.next;
    let specifier = false;

    while (fast_ptr !== null && slow_ptr !== fast_ptr) {
        if (specifier === true) slow_ptr = slow_ptr.next;
        specifier = !specifier;
        fast_ptr = fast_ptr.next;
    }

    return fast_ptr !== null;
};