export const maxSubArray = (input: number[]): number[] => {
    let l = 0;
    let r = 0;
    let sum = input[0];
    let max = input[0];

    for (let target = 1; target < input.length; target += 1) {
        sum += input[target];

        if (input[target] > sum && input[target] > input[l]) {
            l = target;
            r = target;
            sum = input[target];
        }

        if (sum > max) {
            max = sum;
            r = target;
        }
    }

    return input.slice(l, r + 1);
};
