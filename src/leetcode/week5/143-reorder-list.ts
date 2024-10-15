/**
 * 143. Reorder List
 * Algorithm: Linked List Reordering
 * https://leetcode.com/problems/reorder-list/
 *
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 * Example 2:
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 5 * 104].
 * 1 <= Node.val <= 1000
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

/**
 Do not return anything, modify head in-place instead.
 */
export const reorderList = (head: ListNode | null): void => {
    const ptrs: ListNode[] = [];

    while (head !== null) {
        ptrs.push(head);
        head = head.next;
    }

    let l = 0;
    let r = ptrs.length - 1;
    let switcher = true;
    while(l < r) {
        if (switcher) {
            ptrs[l].next = ptrs[r];
            ptrs[r].next = null;
            l += 1;
        } else {
            ptrs[r].next = ptrs[l];
            ptrs[l].next = null;
            r -= 1;
        }
        switcher = !switcher;
    }

    head = ptrs[0];
};