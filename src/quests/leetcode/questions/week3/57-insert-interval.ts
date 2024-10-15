/**
 * 57. Insert Interval
 * Algorithm: Array, Sorting
 * https://leetcode.com/problems/insert-interval/
 */

// function insert(intervals: number[][], newInterval: number[]): number[][] {
//     let merged = [];
//     let cache = [];
//     let status = 'searching'; // 'searching', 'merging', 'finished'
//     intervals.some((interval) => {
//         if (status === 'searching') {
//             if (
//                 (interval[0] <= newInterval[0] && interval[1] >= newInterval[0])
//                 || (interval[0] <= newInterval[1] && interval[1] >= newInterval[1])
//                 || (interval[0] <= newInterval[0] && interval[1] >= newInterval[1])
//                 || (interval[0] >= newInterval[0] && interval[1] <= newInterval[1])
//                 ) {
//                 cache[0] = Math.min(interval[0], newInterval[0]);
//                 cache[1] = Math.max(interval[1], newInterval[1]);
//                 status = 'merging';
//             } else if (
//                 merged[merged.length-1]
//                 && newInterval[0] > merged[merged.length-1][1]
//                 && newInterval[1] < interval[0]
//             ) {
//                 merged.push(newInterval);
//                 merged.push(interval);
//                 status = 'finished';
//             }
//             else merged.push(interval);
//         }
//         else if (status === 'merging') {
//             if (interval[0] <= cache[1]) cache[1] = Math.max(interval[1], cache[1]);
//             else {
//                 status = 'finished';
//                 merged.push(cache);
//                 merged.push(interval);
//             }
//         }
//         else if (status === 'finished') {
//             merged.push(interval);
//         }
//     });

//     if (status === 'searching') {
//         if (merged.length === 0 || merged[merged.length-1][1] < newInterval[0]) merged.push(newInterval);
//         else merged.unshift(newInterval);
//     } else if (status === 'merging') {
//         merged.push(cache);
//     }

//     return merged;
// };

export const insert = (intervals: number[][], newInterval: number[]): number[][] => {
    const merged: number[][] = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i += 1;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
        i += 1;
    }
    merged.push(newInterval);

    while (i < intervals.length) {
        merged.push(intervals[i]);
        i += 1;
    }

    return merged;
};