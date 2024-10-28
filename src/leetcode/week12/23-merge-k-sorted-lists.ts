/**
 * TODO:
 * FIXME: need to understand the solution
 * 23. Merge k Sorted Lists
 * Algorithm:
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example 1:
 *      Input: lists = [[1,4,5],[1,3,4],[2,6]]
 *      Output: [1,1,2,3,4,4,5,6]
 *      Explanation: The linked-lists are:
 *      [
 *        1->4->5,
 *        1->3->4,
 *        2->6
 *      ]
 *      merging them into one sorted list:
 *      1->1->2->3->4->4->5->6
 *
 * Example 2:
 *      Input: lists = []
 *      Output: []
 *
 * Example 3:
 *      Input: lists = [[]]
 *      Output: []
 *
 * Constraints:
 *      k == lists.length
 *      0 <= k <= 104
 *      0 <= lists[i].length <= 500
 *      -104 <= lists[i][j] <= 104
 *      lists[i] is sorted in ascending order.
 *      The sum of lists[i].length will not exceed 104.
 *
 * References:
 *      https://leetcode.com/problems/merge-k-sorted-lists/solutions/3285930/100-faster-c-java-python/
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

export const mergeKLists = (lists: ListNode[]): ListNode | null => {
    if (lists == null || lists.length === 0) {
        return null;
    }
    return mergeKListsHelper(lists, 0, lists.length - 1);
};

const mergeKListsHelper = (lists: ListNode[], start: number, end: number): ListNode | null => {
    if (start === end) {
        return lists[start];
    }
    if (start + 1 === end) {
        return merge(lists[start], lists[end]);
    }
    const mid = start + Math.floor((end - start) / 2);
    const left = mergeKListsHelper(lists, start, mid);
    const right = mergeKListsHelper(lists, mid + 1, end);
    return merge(left, right);
};

const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const dummy = new ListNode(0);
    let curr = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = (l1 !== null) ? l1 : l2;

    return dummy.next;
};