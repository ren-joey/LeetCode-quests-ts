/**
 * FIXME: find a more efficient solution
 * 253. Meeting Rooms II
 * Algorithm: Heap
 * https://leetcode.com/problems/meeting-rooms-ii/
 *
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 *
 * Example 1:
 * Input:
 * [[0, 30],[5, 10],[15, 20]]
 * Output: 2
 *
 * Example 2:
 * Input: [[7,10],[2,4]]
 * Output: 1
 *
 * NOTE:
 *      input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 *
 * References:
 *      https://www.cnblogs.com/grandyang/p/5244720.html
 */

export const minMeetingRooms = (intervals: number[][]): number => {
    let schedule: number[] = [];

    intervals.forEach((interval: number[]) => {
        for (let i = interval[0]; i <= interval[1]; i += 1) {
            schedule[i] = (schedule[i] || 0) + 1;
        }
    });
    schedule = schedule.filter((s: number) => s !== undefined);

    return Math.max(...schedule);
};