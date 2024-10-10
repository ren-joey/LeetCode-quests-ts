
export const question = (input: number[]): number[] => {
    const dp1 = new Array(input.length).fill(-Infinity);
    const strLen1 = new Array(input.length).fill(-1);
    const dp2 = new Array(input.length).fill(-Infinity);
    const strLen2 = new Array(input.length).fill(-1);

    let max = input[0];
    let maxLen = 1;
    let maxIdx = 0;
    dp1[0] = input[0];
    strLen1[0] = 1;
    dp2[0] = input[0];
    strLen2[0] = 1;

    for (let i = 1; i < input.length; i += 1) {
        const target = input[i];
        if (target > target + dp1[i-1]) {
            dp1[i] = target;
            strLen1[i] = 1;
            if (target > max) {
                max = target;
                maxLen = 1;
                maxIdx = i;
            }
        } else {
            dp1[i] = target + dp1[i-1];
            strLen1[i] = 1 + strLen1[i-1];
            if (target + dp1[i-1] > max) {
                max = target + dp1[i-1];
                maxLen = 1 + strLen1[i-1];
                maxIdx = i;
            }
        }

        if (dp1[i] > dp2[i-1]) {
            dp2[i] = dp1[i];
            strLen2[i] = strLen1[i];
            if (dp1[i] > max) {
                max = dp1[i];
                maxLen = strLen1[i];
                maxIdx = i;
            }
        } else {
            dp2[i] = dp2[i-1];
            strLen2[i] = strLen2[i-1];
            if (dp2[i-1] > max) {
                max = dp2[i-1];
                maxLen = strLen2[i-1];
                maxIdx = i;
            }
        }
    }

    return input.slice(maxIdx - maxLen + 1, maxIdx + 1);
};
