/**
 * TODO:
 * 24. Swap Nodes in Pairs
 * Algorithm: Iterative
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 *      Input: head = [1,2,3,4]
 *      Output: [2,1,4,3]
 *      Explanation:
 *
 * Example 2:
 *      Input: head = []
 *      Output: []
 *
 * Example 3:
 *      Input: head = [1]
 *      Output: [1]
 *
 * Example 4:
 *      Input: head = [1,2,3]
 *      Output: [2,1,3]
 *
 * Constraints:
 *      The number of nodes in the list is in the range [0, 100].
 *      0 <= Node.val <= 100
 *
 * References:
 *      https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1775033/swapping-nodes-not-just-the-values-visual-explanation-well-explained-c/
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

export const swapPairs = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) return head; // If there are less than 2 nodes, return the list as it is.

    const dummyNode = new ListNode();
    let prevNode = dummyNode;
    let currNode = head;

    while (currNode && currNode.next) {
        prevNode.next = currNode.next;
        currNode.next = prevNode.next.next;
        prevNode.next.next = currNode;

        prevNode = currNode;
        currNode = currNode.next as ListNode;
    }

    return dummyNode.next;
};
