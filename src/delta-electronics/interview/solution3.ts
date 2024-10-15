export const maxSubArray = (input: number[]): number[] => {
    // Use 2 pointers to represent optimal range
    let l = 0;
    let r = 0;
    let sum = input[0];
    let max = input[0];

    for (let target = 1; target < input.length; target += 1) {
        sum += input[target];

        // If target number greater than sum and the number at left pointer,
        // which means the target number is an optimal single number
        if (input[target] > sum && input[target] > input[l]) {

            // Update the optimal range to target
            l = target;
            r = target;
            max = sum = input[target];
        }
        
        // Else if the sum is grater than max,
        // which means the new range is greater than the previous range
        else if (sum > max) {

            // Update the optimal range by extend right pointer
            r = target;
            max = sum;
        }
    }

    return input.slice(l, r + 1);
};
