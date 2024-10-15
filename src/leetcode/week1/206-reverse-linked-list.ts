/**
 * 206. Reverse Linked List
 * Algorithm: Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

import { ListNode } from "../classes/list-node";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export const reverseList = (head: ListNode | null): ListNode | null => {
    if (head === null) return head;

    let newHead: ListNode = head;
    head = head.next;
    newHead.next = null;

    while (head !== null) {
        const temp: ListNode | null = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }

    return newHead;
};