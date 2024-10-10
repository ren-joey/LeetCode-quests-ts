export const maxSubArray = (input: number[]): number[] => {
    const dp: number[] = new Array(input.length).fill(-Infinity);

    let maxSum = input[0];
    let maxLen = 1;
    let maxEndIdx = 0;
    let prevLen = 1;
    dp[0] = input[0];

    for (let i = 1; i < input.length; i += 1) {
        const target = input[i];

        if (target > target + dp[i-1]) {
            dp[i] = target;
            prevLen = 1;
            if (target > maxSum) {
                maxSum = target;
                maxLen = 1;
                maxEndIdx = i;
            }
        } else {
            dp[i] = target + dp[i-1];
            prevLen += 1;
            if (dp[i] > maxSum) {
                maxSum = dp[i];
                maxLen = prevLen;
                maxEndIdx = i;
            }
        }
    }

    return input.slice(maxEndIdx - maxLen + 1, maxEndIdx + 1);
};
