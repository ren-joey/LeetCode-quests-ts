/**
 * 234. Palindrome Linked List
 * Algorithm: Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
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

export const isPalindrome = (head: ListNode | null): boolean => {
    const arr: number[] = [];

    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    return arr.toString() === arr.reverse().toString();
};