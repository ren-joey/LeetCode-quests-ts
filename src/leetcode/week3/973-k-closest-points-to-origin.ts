/**
 * TODO:
 * 973. K Closest Points to Origin
 * Algorithm: K-th problem Max-heap Quick sort
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */

export const kClosest = (points: number[][], k: number): number[][] => {
    points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]);
    return points.slice(0, k);
};
