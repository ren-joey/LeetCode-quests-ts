/**
 * TODO:
 * 278. First Bad Version
 * Algorithm: Binary Search
 * https://leetcode.com/problems/first-bad-version/
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

export const solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left_ptr = 1;
        let right_ptr = n;
        let res: undefined|number = undefined;

        while (left_ptr <= right_ptr && res === undefined) {
            const left_v = isBadVersion(left_ptr);
            const right_v = isBadVersion(right_ptr);
            if (left_v === true) res = left_ptr;
            else if (right_v === false) res = right_ptr + 1;
            else if (left_v === false
                && right_v === true && right_ptr - left_ptr === 1) res = right_ptr;

            const mid = Math.round((left_ptr + right_ptr) / 2);
            if (left_v === isBadVersion(mid)) {
                left_ptr = mid + 1;
            } else {
                right_ptr = mid - 1;
            }
        }

        return res as number;
    };
};
