/**
 * 21. Merge Two Sorted Lists
 * Algorithm: Linked List
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

import { ListNode } from "../classes/list-node";

export const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    let head: ListNode | null = null;

    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val <= list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }

    let tail: ListNode | null = head;
    while(list1 !== null || list2 !== null) {
        if (list1 === null) {
            tail.next = list2;
            break;
        } else if (list2 === null) {
            tail.next = list1;
            break;
        }

        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    return head;
};