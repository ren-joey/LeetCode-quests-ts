/**
 * 46. Permutations
 * Algorithm: Array Push and Pop
 * https://leetcode.com/problems/permutations/
 */

export const permute = (nums: number[]): number[][] => {
    const res: number[][] = [];

    const picker = (picked: number[], nums: number[]) => {
        if (nums.length === 0) res.push([...picked]);
        else {
            for (let i = 0; i < nums.length; i += 1) {
                const c = nums.splice(i, 1)[0];
                picked.push(c);
                picker(picked, nums);
                picked.pop();
                nums.splice(i, 0, c);
            }
        }
    };

    picker([], nums);
    return res;
};