/**
 * 19. Remove Nth Node From End of List
 * Algorithm: Linked List Removal
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 * Constraints:
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 * Follow up: Could you do this in one pass?
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

export const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    const ptrs: ListNode[] = [];

    while (head !== null) {
        ptrs.push(head);
        head = head.next;
    }

    const len = ptrs.length;
    if (len === 1 && n === 1) return null;
    if (n === ptrs.length) return ptrs[1];
    ptrs[len - n - 1].next = ptrs[len - n + 1] || null;
    return ptrs[0];
};