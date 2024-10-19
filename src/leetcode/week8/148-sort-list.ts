/**
 * 148. Sort List
 * Algorithm: Merge Sort
 * https://leetcode.com/problems/sort-list/
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Example 1:
 *      Input: head = [4,2,1,3]
 *      Output: [1,2,3,4]
 *
 * Example 2:
 *      Input: head = [-1,5,3,4,0]
 *      Output: [-1,0,3,4,5]
 *
 * Example 3:
 *      Input: head = []
 *      Output: []
 *
 * Constraints:
 *      The number of nodes in the list is in the range [0, 5 * 104].
 *      -105 <= Node.val <= 105
 *
 * Follow up:
 *      Can you sort the linked list in O(nlogn) time and O(1) memory (i.e. constant space)?
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

export const sortList = (head: ListNode | null): ListNode | null => {
    if (head === null) return head;

    let res: ListNode[] = [];

    while (head) {
        res.push(head);
        head = head.next;
    }

    res = res.sort((a, b) => a.val - b.val);

    head = res[0];
    let tail = head;
    for (let i = 1; i < res.length; i += 1) {
        tail.next = res[i];
        tail = tail.next;
    }
    tail.next = null;

    return head;
};