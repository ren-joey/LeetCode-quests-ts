/**
 * 39. Combination Sum
 * Algorithm: Array Push and Pop
 * https://leetcode.com/problems/combination-sum/
 */

export const combinationSum = (candidates: number[], target: number): number[][] => {
    const res: number[][] = [];

    const findCombination = (idx: number, combination: number[], total: number): void => {
        if (total > target || idx >= candidates.length) {
            return;
        }
        else if (total === target) {
            res.push([...combination]);
        }
        else {
            combination.push(candidates[idx]);
            findCombination(idx, combination, total + candidates[idx]);
            combination.pop();
            findCombination(idx + 1, combination, total);
        }
    };

    findCombination(0, [], 0);

    return res;
};