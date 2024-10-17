/**
 * TODO:
 * FIXME: to be familiar with the algorithm using double linked list
 * 146. LRU Cache
 * Algorithm: Hash Table + Double Linked List
 * https://leetcode-cn.com/problems/lru-cache/
 *
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 *
 * Implement the LRUCache class:
 * LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
 * int get(int key): Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 *
 * Example 1:
 *      Input
 *      ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 *      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 *      Output
 *      [null, null, null, 1, null, -1, null, -1, 3, 4]
 *      Explanation
 *      LRUCache lRUCache = new LRUCache(2);
 *      lRUCache.put(1, 1); // cache is {1=1}
 *      lRUCache.put(2, 2); // cache is {1=1, 2=2}
 *      lRUCache.get(1);    // return 1
 *      lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 *      lRUCache.get(2);    // returns -1 (not found)
 *      lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 *      lRUCache.get(1);    // return -1 (not found)
 *      lRUCache.get(3);    // return 3
 *      lRUCache.get(4);    // return 4
 *
 * Constraints:
 *      1 <= capacity <= 3000
 *      0 <= key <= 104
 *      0 <= value <= 105
 *      At most 2 * 105 calls will be made to get and put.
 */

class DLinkedNode {
    key: number;
    value: number;
    pre: DLinkedNode | null = null;
    post: DLinkedNode | null = null;

    constructor(key?: number, value?: number) {
        this.key = key ?? 0;
        this.value = value ?? 0;
    }
}

export class LRUCache {
    private cache: { [key: number]: DLinkedNode } = {};
    private count: number = 0;
    private capacity: number;
    private head: DLinkedNode;
    private tail: DLinkedNode;

    constructor(capacity: number) {
        this.capacity = capacity;

        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();

        this.head.post = this.tail;
        this.tail.pre = this.head;
    }

    /**
     * Always add the new node right after head;
     */
    private addNode(node: DLinkedNode): void {
        node.pre = this.head;
        node.post = this.head.post;

        this.head.post!.pre = node; //
        this.head.post = node;
    }

    /**
     * Remove an existing node from the linked list.
     */
    private removeNode(node: DLinkedNode): void {
        const pre = node.pre;
        const post = node.post;

        pre!.post = post;
        post!.pre = pre;
    }

    /**
     * Move certain node in between to the head.
     */
    private moveToHead(node: DLinkedNode): void {
        this.removeNode(node);
        this.addNode(node);
    }

    // pop the current tail.
    private popTail(): DLinkedNode {
        const res = this.tail.pre!;
        this.removeNode(res);
        return res;
    }

    public get(key: number): number {
        const node = this.cache[key];
        if (!node) {
            return -1; // should raise exception here.
        }

        // move the accessed node to the head;
        this.moveToHead(node);

        return node.value;
    }

    public put(key: number, value: number): void {
        const node = this.cache[key];

        if (!node) {
            const newNode = new DLinkedNode(key, value);
            this.cache[key] = newNode;
            this.addNode(newNode);

            ++this.count;

            if (this.count > this.capacity) {
                // pop the tail
                const tail = this.popTail();
                delete this.cache[tail.key];
                --this.count;
            }
        } else {
            // update the value.
            node.value = value;
            this.moveToHead(node);
        }
    }
}
