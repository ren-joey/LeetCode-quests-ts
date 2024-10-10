export const maxSubArray = (input: number[]): number[] => {
    const records: number[] = new Array(input.length).fill(-Infinity);

    let maxSum = input[0];
    let maxLen = 1;
    let maxEndIdx = 0;
    let prevLen = 1;
    records[0] = input[0];

    for (let i = 1; i < input.length; i += 1) {
        const target = input[i];

        // If target number greater than it pluses previous records,
        // record the target
        if (target > target + records[i-1]) {
            records[i] = target;
            prevLen = 1;

            // update max records, only if target is greater than maxSum
            if (target > maxSum) {
                maxSum = target;
                maxLen = 1;
                maxEndIdx = i;
            }
        }

        // Else, record the sum and length 
        else {
            records[i] = target + records[i-1];
            prevLen += 1;

            // Update max records, only if the sum is greater than maxSum
            if (records[i] > maxSum) {
                maxSum = records[i];
                maxLen = prevLen;
                maxEndIdx = i;
            }
        }
    }

    return input.slice(maxEndIdx - maxLen + 1, maxEndIdx + 1);
};
