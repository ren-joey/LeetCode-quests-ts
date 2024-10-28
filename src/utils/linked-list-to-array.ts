import { ListNode } from "../leetcode/classes/list-node";

export const linkedListToArray = (head: ListNode | null): number[] => {
    const ans: number[] = [];
    while (head !== null) {
        ans.push(head.val);
        head = head.next;
    }
    return ans;
};