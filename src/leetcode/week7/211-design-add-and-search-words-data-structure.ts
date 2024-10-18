/**
 * TODO:
 * 211. Design Add and Search Words Data Structure
 * Algorithm: Trie
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 *
 * Example:
 *      Input
 *      ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 *      [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 *      Output
 *      [null,null,null,null,false,true,true,true]
 *      Explanation
 *      WordDictionary wordDictionary = new WordDictionary();
 *      wordDictionary.addWord("bad");
 *      wordDictionary.addWord("dad");
 *      wordDictionary.addWord("mad");
 *      wordDictionary.search("pad"); // return False
 *      wordDictionary.search("bad"); // return True
 *      wordDictionary.search(".ad"); // return True
 *      wordDictionary.search("b.."); // return True
 *
 * Constraints:
 *      1 <= word.length <= 25
 *      word in addWord consists of lowercase English letters.
 *      word in search consist of '.' or lowercase English letters.
 *      There will be at most 2 dots in word for search queries.
 *      At most 104 calls will be made to addWord and search.
 */

export class WordDictionary {
    private children: (WordDictionary | null)[];
    private isEndOfWord: boolean;

    // Initialize your data structure here.
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }

    // Adds a word into the data structure.
    addWord(word: string): void {
        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (this.children[index] === null) {
                this.children[index] = new WordDictionary();
            }
            this.children[index]!.addWord(word.slice(1));
            return;
        }
        this.isEndOfWord = true;
    }

    // Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
    search(word: string): boolean {
        return this.searchHelper(word, 0);
    }

    private searchHelper(word: string, index: number): boolean {
        if (index === word.length) {
            return this.isEndOfWord;
        }

        const c = word[index];
        if (c === '.') {
            for (const child of this.children) {
                if (child !== null && child.searchHelper(word, index + 1)) {
                    return true;
                }
            }
            return false;
        } else {
            const childIndex = c.charCodeAt(0) - 'a'.charCodeAt(0);
            const child = this.children[childIndex];
            if (child === null) {
                return false;
            }
            return child.searchHelper(word, index + 1);
        }
    }
}
