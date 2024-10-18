/**
 * 328. Odd Even Linked List
 * Algorithm: Linked List
 * https://leetcode.com/problems/odd-even-linked-list/
 *
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 *      Input: head = [1,2,3,4,5]
 *      Output: [1,3,5,2,4]
 *
 * Example 2:
 *      Input: head = [2,1,3,5,6,4,7]
 *      Output: [2,3,6,7,1,5,4]
 *
 * Constraints:
 *      The number of nodes in the linked list is in the range [0, 104].
 *      -106 <= Node.val <= 106
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


export const oddEvenList = (head: ListNode | null): ListNode | null => {
    if (head === null || head.next === null) {
        return head; // If the list is empty or has only one node, return as is
    }

    let odd: ListNode | null = head; // Initialize odd pointer to the head of the list
    let even: ListNode | null = head.next; // Initialize even pointer to the second node
    const evenHead: ListNode | null = even; // Store the start of the even list

    while (even !== null && even.next !== null) {
        // Update odd and even pointers to skip one node each
        odd.next = odd.next!.next;
        even.next = even.next.next;
        odd = odd.next!;
        even = even.next;
    }

    // Connect the end of the odd list to the start of the even list
    odd.next = evenHead;

    return head; // Return the modified list
};
