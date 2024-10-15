/**
 * 876. Middle of the Linked List
 * Algorithm: Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */

import { ListNode } from "../classes/list-node";

export const middleNode = (head: ListNode | null): ListNode | null => {
    if (head === null) return null;

    const pointers: ListNode[] = [];
    while (head !== null) {
        pointers.push(head);
        head = head.next;
    }

    return pointers[Math.ceil((pointers.length - 1) / 2)];
};