/**
 * 56. Merge Intervals
 * Algorithm: Array Sort
 * https://leetcode.com/problems/merge-intervals/
 */

export const merge = (intervals: number[][]): number[][] => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    const res = [];
    let cache = intervals[0];

    for (let i = 1; i < intervals.length; i += 1) {
        if (cache[1] >= intervals[i][0]) {
            cache[1] = Math.max(cache[1], intervals[i][1]);
        }
        else {
            res.push(cache);
            cache = intervals[i];
        }
    }

    res.push(cache);

    return res;
};