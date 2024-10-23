/**
 * 2. Process Scheduling

Multiprocessor systems use multiple CPUs to perform various tasks. This increases throughput and reduces response time. In this problem, a multiprocessor system has a certain number of processors. Each processor has the ability to schedule a limited number of processes in one second. However, after this scheduling, the processor's ability is reduced to floor(ability/2). Given the processor's abilities and the number of processes, what is the minimum time required to schedule all the processes in the system?

Example

n = 5 (number of processors and size of ability[])
ability = [3, 1, 7, 2, 4]
processes = 15
This optimal solution is:

First, the processor with ability = 7 schedules 7 processes in one second. Now, ability = [3, 1, 3, 2, 4] because 7 was reduced to floor(7/2). There are 15 - 7 = 8 remaining processes.
Second, the processor with ability = 4 is used. After that, ability = [3, 1, 3, 2, 2]. Remaining processes = 8 - 4 = 4.
Third, a processor with ability = 3 is used. Now, ability = [1, 1, 3, 2, 2]. Remaining processes = 4 - 3 = 1.
Finally, a processor with ability = 1 is used to schedule the final process.
Each step requires one second of processing time so the answer is 4.

Function Description
Complete the function minimumTime in the editor below.

minimumTime has the following parameter(s):

int ability[n]: each element denotes the ability of the
𝑖
𝑡
ℎ
i
th
  processor
long processes: the number of processes to be scheduled
Returns:

int: the minimum time required to schedule the processes
Constraints:

1
≤
𝑛
≤
1
0
5
1≤n≤10
5

1
≤
ability
[
𝑖
]
≤
1
0
6
1≤ability[i]≤10
6

1
≤
processes
≤
1
0
12
1≤processes≤10
12

It is guaranteed that the processes can be scheduled using the given multiprocessor system.
 */

/*
 * Complete the 'minimumTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ability
 *  2. LONG_INTEGER processes
 */

// 'use strict';

// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }



/*
 * Complete the 'minimumTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ability
 *  2. LONG_INTEGER processes
 */

export const minimumTime = (ability: number[], processes: number): number => {
    let time = 0;
    let remain = processes;
    ability = ability.sort((a, b) => b - a);

    while (remain > 0) {
        const _ab = ability.slice(0, time + 1);
        const max = Math.max(..._ab);
        const maxIdx = _ab.indexOf(max);

        const addProcesses = Math.min(max, remain);
        time += 1;
        remain -= addProcesses;
        ability[maxIdx] = Math.floor(max / 2);
    }

    return time;
};

// function main() {
//     const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

//     const abilityCount: number = parseInt(readLine().trim(), 10);

//     const ability: number[] = [];

//     for (let i: number = 0; i < abilityCount; i++) {
//         const abilityItem: number = parseInt(readLine().trim(), 10);

//         ability.push(abilityItem);
//     }

//     const processes: number = parseInt(readLine().trim(), 10);

//     const result: number = minimumTime(ability, processes);

//     ws.write(result + '\n');

//     ws.end();
// }
