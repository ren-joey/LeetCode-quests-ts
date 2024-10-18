/**
 * TODO:
 * 692. Top K Frequent Words
 * Algorithm: Trie
 * https://leetcode.com/problems/top-k-frequent-words/
 *
 * Given an array of strings words and an integer k, return the k most frequent strings.
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 *
 * Example 1:
 *      Input: words = ["i","love","leetcode","i","love","coding"], k = 2
 *      Output: ["i","love"]
 *      Explanation: "i" and "love" are the two most frequent words.
 *      Note that "i" comes before "love" due to a lower alphabetical order.
 *
 * Example 2:
 *      Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
 *      Output: ["the","is","sunny","day"]
 *      Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 *
 * Constraints:
 *      1 <= words.length <= 500
 *      1 <= words[i].length <= 10
 *      words[i] consists of lowercase English letters.
 *      k is in the range [1, The number of unique words[i]]
 *
 * Follow-up:
 *      Could you solve it in O(n log(k)) time and O(n) extra space?
 */

export const topKFrequent = (words: string[], k: number): string[] => {
    const wordCount: { [key: string]: number } = {};
    const uniqueCounts: Set<number> = new Set();
    const elements: string[] = [];
    const counts: number[] = [];
    const result: string[] = [];

    // Count the frequency of each word
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Collect unique counts and elements
    for (const word in wordCount) {
        elements.push(word);
        uniqueCounts.add(wordCount[word]);
    }

    // Convert the counts set to an array and sort it (ascending order)
    counts.push(...uniqueCounts);
    counts.sort((a, b) => a - b);

    let count = 0;
    const h = counts.length - 1;

    // Collect the top k frequent words
    for (let i = 0; i < k; i += 1) {
        for (const element of elements) {
            if (wordCount[element] === counts[h - i]) {
                result.push(element);
                count += 1;
            }
            if (count === k) {
                return result;
            }
        }
    }

    return result;
};
