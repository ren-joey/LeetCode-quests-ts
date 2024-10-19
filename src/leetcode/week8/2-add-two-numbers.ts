/**
 * 2. Add Two Numbers
 * Algorithm: Linked List
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *      Input: l1 = [2,4,3], l2 = [5,6,4]
 *      Output: [7,0,8]
 *      Explanation: 342 + 465 = 807.
 *
 * Example 2:
 *      Input: l1 = [0], l2 = [0]
 *      Output: [0]
 *
 * Example 3:
 *      Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 *      Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 *      The number of nodes in each linked list is in the range [1, 100].
 *      0 <= Node.val <= 9
 *      It is guaranteed that the list represents a number that does not have leading zeros.
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

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let carrier: number = 0;
    const head: ListNode = new ListNode(-1);
    let tail: ListNode = head;

    while (l1 || l2 || carrier !== 0) {
        if (tail.val !== -1) {
            tail.next = new ListNode();
            tail = tail.next!;
        }

        const sum: number = (l1?.val || 0) + (l2?.val || 0) + carrier;
        carrier = sum >= 10 ? 1 : 0;
        tail.val = sum % 10;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return head;
};