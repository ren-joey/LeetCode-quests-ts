/**
 * TODO:
 * 721. Accounts Merge
 * Algorithm: Graph DFS
 * https://leetcode.com/problems/accounts-merge/
 */

interface Hash { [s: string]: number[] }

export const accountsMerge = (accounts: string[][]): string[][] => {
    const hash: Hash = {};
    const isVisited: boolean[] = new Array(accounts.length).fill(false);

    // Build a graph
    accounts.forEach((account, idx) => {
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            if (!hash[email]) hash[email] = [];
            hash[email].push(idx);
        }
    });

    // DFS for traversing accounts
    const dfs = (idx: number, emails: Set<string>) => {
        if (!isVisited[idx]) {
            isVisited[idx] = true;

            for(let i = 1; i < accounts[idx].length; i += 1) {
                const email = accounts[idx][i];
                emails.add(email);

                for (const neighbor of hash[email]) {
                    dfs(neighbor, emails);
                }
            }
        }
    };

    // Perform DFS for accounts and add to results.
    const res: string[][] = [];
    accounts.forEach((account, idx) => {
        if (!isVisited[idx]) {
            const name = account[0];
            const emails: Set<string> = new Set();
            dfs(idx, emails);
            res.push([name, ...[...emails].sort()]);
        }
    });
    return res;
};
