import { ListNode } from "../leetcode/classes/list-node";

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let node = head;
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head;
};