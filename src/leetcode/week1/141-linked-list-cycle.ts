/**
 * 141. Linked List Cycle
 * Algorithm: Linked List
 * https://leetcode.com/problems/linked-list-cycle/
 */

import { ListNode } from '../classes/list-node';

export const hasCycle = (head: ListNode | null): boolean => {
    if (head === null) return false;

    let slow_ptr = head;
    let fast_ptr = head.next;
    let specifier = false;

    while (fast_ptr !== null && slow_ptr !== fast_ptr) {
        if (specifier === true) slow_ptr = slow_ptr.next as ListNode;
        specifier = !specifier;
        fast_ptr = fast_ptr.next;
    }

    return fast_ptr !== null;
};