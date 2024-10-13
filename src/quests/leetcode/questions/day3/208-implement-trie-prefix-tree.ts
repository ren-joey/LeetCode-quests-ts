/**
 * TODO:
 * 208. Implement Trie (Prefix Tree)
 * Algorithm: Trie
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

interface Hash { [a: string]: any };

export class Trie {
    tree: Hash;
    words: string[];

    constructor() {
        this.tree = {};
        this.words = [];
    }

    insert(word: string): void {
        this.words.push(word);

        let cur = this.tree;
        for(let i = 0; i < word.length; i += 1) {
            const c = word[i];
            if (cur[c]) {
                cur = cur[c];
            } else {
                cur[c] = {};
                cur = cur[c];
            }
        }
    }

    search(word: string): boolean {
        return this.words.includes(word);
    }

    startsWith(prefix: string): boolean {
        let check = true;
        let cur = this.tree;
        for (let i = 0; i < prefix.length; i += 1) {
            const c = prefix[i];
            if (cur[c]) {
                cur = cur[c];
            } else {
                check = false;
                break;
            }
        }
        return check;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */