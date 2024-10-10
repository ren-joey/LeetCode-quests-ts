
export const maxSubArray = (input: number[]): number[] => {
    const dp = new Array(input.length).fill([-Infinity, -1]);

    let maxSum = input[0];
    let maxLen = 1;
    let maxEndIdx = 0;
    dp[0] = [input[0], 1];

    for (let i = 1; i < input.length; i += 1) {
        const target = input[i];
        const [prevDpSum, prevDpLen] = dp[i-1];

        if (target > target + prevDpSum) {
            dp[i] = [target, 1];
            if (target > maxSum) {
                maxSum = target;
                maxLen = 1;
                maxEndIdx = i;
            }
        } else {
            dp[i] = [target + prevDpSum, 1 + prevDpLen];
            if (target + prevDpSum > maxSum) {
                maxSum = target + prevDpSum;
                maxLen = 1 + prevDpLen;
                maxEndIdx = i;
            }
        }
    }

    return input.slice(maxEndIdx - maxLen + 1, maxEndIdx + 1);
};
