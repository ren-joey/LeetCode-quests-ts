/**
 *Here is the extracted text from the image:

---

**1. Counting Closed Paths**

Some numbers are formed with closed paths. The digits 0, 4, 6, and 9 each have 1 closed path, and 8 has 2. None of the other numbers is formed with a closed path. Given a number, determine the total number of *closed paths* in all of its digits combined.

**Example**

- **number = 649578**

  The digits with closed paths are 6, 4, 9, and 8. The total number of closed paths is \( 1 + 1 + 1 + 2 = 5 \).

**Function Description**
Complete the function **closedPaths** in the editor below.

**closedPaths** has the following parameter(s):
- **int number**: an integer

**Returns**:
- **int**: the number of *closed paths* in **number**

**Constraints**:
- \( 1 \leq \text{{number}} \leq 10^9 \)

---

Let me know if you need further help!
 */

/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

export const closedPaths = (number: number): number => {
    const cps: { [n: number]: number } = {
        0: 1,
        4: 1,
        6: 1,
        8: 2,
        9: 1
    };

    let total = 0;
    for (const d of number.toString()) {
        total += cps[parseInt(d)] || 0;
    }

    return total;
};

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const number = parseInt(readLine().trim(), 10);

//     const result = closedPaths(number);

//     ws.write(result + '\n');

//     ws.end();
// }
