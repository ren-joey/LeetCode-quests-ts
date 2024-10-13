/**
 * TODO:
 * 15. 3Sum
 * Algorithm: Pointers
 * https://leetcode.com/problems/3sum/
 */

// function threeSum(nums: number[]): number[][] {
//     const res: number[][] = [];
//     nums = nums.sort((a, b) => a - b);

//     const picker = (nums: number[], picked: number[]) => {
//         if (picked.length === 3) {
//             const sum = picked.reduce((a, b) => a + b);
//             if (sum === 0 && !JSON.stringify(res).includes(JSON.stringify(picked))) res.push(picked);
//             return;
//         }
//         if (nums.length === 0) return;
//         else {
//             const num = nums.shift();
//             picker([...nums], [...picked, num]);
//             picker([...nums], [...picked]);
//         }
//     };

//     picker(nums, []);

//     return res;
// };

export const threeSum = (nums: number[]): number[][] => {
    const res: number[][] = [];
    const len = nums.length;
    nums = nums.sort((a, b) => a - b);
    let fix = 0;

    while (fix < nums.length - 2) {
        if (nums[fix] === nums[fix-1]) {
            fix += 1;
            continue;
        }

        let l = fix + 1;
        let r = len - 1;

        while (l < r) {
            const sum = nums[fix] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[fix], nums[l], nums[r]]);
                const cache = nums[l];
                while (l < r && nums[l] === cache) {
                    l += 1;
                }
            }
            else if (sum < 0) l += 1;
            else if (sum > 0) r -= 1;
        }

        fix += 1;
    }

    return res;
};