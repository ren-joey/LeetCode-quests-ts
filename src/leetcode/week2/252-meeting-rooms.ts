/**
 * 252. Meeting Rooms
 * Algorithm: Hash Table
 * https://leetcode.com/problems/meeting-rooms/
 * https://www.cnblogs.com/grandyang/p/5240774.html
 *
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
 *
 * Example 1:
 *      Input:
 *      [[0,30],[5,10],[15,20]]
 *      Output: false
 *
 * Example 2:
 *      Input: [[7,10],[2,4]]
 *      Output: true
 * NOTE:
 *      input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */

interface Hash {[n: number]: number}

export const meetingRooms = (schedule:number[][]) => {
    const hours: Hash = {};
    let detected = true;

    schedule.some((period) => {
        for (let i = period[0]; i <= period[1]; i += 1) {
            if (!hours[i]) hours[i] = 1;
            else {
                hours[i] += 1;
                detected = false;
                break;
            }
        }

        if (!detected) return true;
    });

    return detected;
};

module.exports = meetingRooms;