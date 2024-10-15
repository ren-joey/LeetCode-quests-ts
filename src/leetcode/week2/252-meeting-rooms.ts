/**
 * 252. Meeting Rooms
 * Algorithm: Hash Table
 * https://leetcode.com/problems/meeting-rooms/
 * https://www.cnblogs.com/grandyang/p/5240774.html
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