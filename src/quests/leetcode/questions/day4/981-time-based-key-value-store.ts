/**
 * 981. Time Based Key-Value Store
 * Algo: Hash Table
 * https://leetcode.com/problems/time-based-key-value-store/
 */

interface Hash { [s: string]: KeyRecord }
interface Key { [s: number]: string }
interface KeyRecord { values: Key, times: number[] }

export class TimeMap {
    keyLib: Hash;
    times: number[];

    constructor() {
        this.keyLib = {};
        this.times = [];
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.keyLib[key]) {
            this.keyLib[key] = {
                values: {},
                times: []
            };
        }
        this.keyLib[key].values[timestamp] = value;
        this.keyLib[key].times.push(timestamp);
    }

    get(key: string, timestamp: number): string {
        if (!this.keyLib[key]) return '';

        let pickedTime = -Infinity;
        for (let i = 0; i < this.keyLib[key].times.length; i += 1) {
            const time = this.keyLib[key].times[i];
            if (time === timestamp) {
                pickedTime = time;
                break;
            }
            else if (time < timestamp && time > pickedTime) pickedTime = time;
        }
        return pickedTime === -Infinity ? '' : this.keyLib[key].values[pickedTime];
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */