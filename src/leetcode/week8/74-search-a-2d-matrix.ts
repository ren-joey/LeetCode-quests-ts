/**
 * 74. Search a 2D Matrix
 * Algorithm: Binary Search
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 *
 * Example 1:
 *      Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 *      Output: true
 *
 * Example 2:
 *      Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 *      Output: false
 *
 * Constraints:
 *      m == matrix.length
 *      n == matrix[i].length
 *      1 <= m, n <= 100
 *      -10^4 <= matrix[i][j], target <= 10^4
 */

export const searchMatrix = (matrix: number[][], target: number): boolean => {
    let top = 0;
    let bot = matrix.length - 1;

    while (top <= bot) {
        const mid = Math.floor((top + bot) / 2);

        if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
            top = mid;
            break;
        } else if (matrix[mid][0] > target) {
            bot = mid - 1;
        } else {
            top = mid + 1;
        }
    }

    if (top > bot) return false;

    const row = top;
    let left = 0;
    let right = matrix[row].length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};