/**
 * 61. Rotate List
 * Algorithm: Two Pointers
 * https://leetcode.com/problems/rotate-list/
 *
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example 1:
 *      Input: head = [1,2,3,4,5], k = 2
 *      Output: [4,5,1,2,3]
 *
 * Example 2:
 *      Input: head = [0,1,2], k = 4
 *      Output: [2,0,1]
 *
 * Constraints:
 *      The number of nodes in the list is in the range [0, 500].
 *      -100 <= Node.val <= 100
 *      0 <= k <= 2 * 109
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

export const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
    if (head === null || head.next === null || k === 0) return head;

    const nodes: ListNode[] = [];

    let tail = head;
    while (tail) {
        nodes.push(tail);
        tail = tail.next!;
    }

    const start = (nodes.length - (k % nodes.length)) % nodes.length;
    head = nodes[start];
    tail = head;
    for (let i = 1; i < nodes.length; i += 1) {
        tail.next = nodes[
            (start + i) % nodes.length
        ];
        tail = tail.next;
    }
    tail.next = null;

    return head;
};