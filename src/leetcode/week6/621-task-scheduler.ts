/**
 * TODO:
 * 621. Task Scheduler
 * Algorithm:
 * https://leetcode.com/problems/task-scheduler/
 *
 * You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
 * Return the minimum number of CPU intervals required to complete all tasks.
 *
 * Example 1:
 *      Input: tasks = ["A","A","A","B","B","B"], n = 2
 *      Output: 8
 *      Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
 *      After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.
 *
 * Example 2:
 *      Input: tasks = ["A","C","A","B","D","B"], n = 1
 *      Output: 6
 *      Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
 *      With a cooling interval of 1, you can repeat a task after just one other task.
 *
 * Example 3:
 *      Input: tasks = ["A","A","A", "B","B","B"], n = 3
 *      Output: 10
 *      Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
 *      There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.
 *
 * Constraints:
 *      1 <= tasks.length <= 104
 *      tasks[i] is an uppercase English letter.
 *      0 <= n <= 100
 */

export const leastInterval = (tasks: string[], n: number): number => {
    const taskFreq = new Array(26).fill(0);

    // Count the frequency of each task
    // 'A'.charCodeAt(0) = 65, 'B'.charCodeAt(0) = 66, ... 'Z'.charCodeAt(0) = 90
    for (const c of tasks) {
        taskFreq[c.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
    }

    taskFreq.sort((a, b) => b - a);
    const batch = taskFreq[0] - 1; // -1 because we don't need to wait for the last task
    let vSlots = batch * n;

    for (let i = 1; i < 26; i++) {
        if (taskFreq[i] === 0) break;
        // If the task frequency is less than the batch, then we can use the batch slots
        vSlots -= Math.min(taskFreq[i], batch);
    }
    return vSlots > 0 ? tasks.length + vSlots : tasks.length;
};