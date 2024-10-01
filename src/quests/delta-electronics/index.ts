/* eslint-disable @typescript-eslint/no-explicit-any */

import { intersection } from 'lodash';

/**
 * 假設在網路上購買了一堆商品，A1,A2,A3,A4,A5,A6,A7,A10,A15,A20,A25,A30
 * 每個商品購買一個，且每個商品都是100元。
 * 商店有套餐福利，滿足購物套餐的物品組，可以打九折。（一個商品只能計算在一個套餐中。）
 *
 * G1: A1,A2,A3,A4,A5,A6
 * G2: A1,A2,A50
 * G3: A1,A2,A3,A4
 * G4: A5,A10,A20,A30
 * G5: A5,A6,A10,A15
 * G6: A20,A30
 * G7: A20,A25,A30
 *
 * 該如何選擇套餐，讓【付錢最少】？為何您的演算法能有最佳效率？請附上【code + 結果畫面 + 分析您的演算法 Time complexity】，並說明您選擇這樣做法的原因，為何您覺得
 * 樣的做法能有最佳效率。
 * 以上述例子來看，最佳套餐選取應該是 G3 + G5 + G7，只會剩下 A7 沒打折
 */

export const optimalSets = (prods: number, sets: number[][]): number[] => {
    const setLen = sets.length;
    const loopUps: number[][] = new Array(setLen).fill(0).map(() => ([]));
    const values: number[] = new Array(setLen).fill(0);
    const allSets: number[] = [];

    // Find other available sets depending on the target set
    sets.forEach((set, i) => {
        const exists = [...set];
        values[i] = set.length;
        allSets.push(i);

        sets.forEach((_set, j) => {
            if (j > i) {
                let isConflict = false;
                _set.some((p) => {
                    if (exists.includes(p)) {
                        isConflict = true;
                        return true;
                    }
                });

                if (!isConflict) loopUps[i].push(j);
            }
        });
    });

    // Recursive, only search the available sets
    const findDeep = (idx: number, available: number[], path: number[]): any[] => {
        if (idx >= setLen) return [0, path];

        path.push(idx);
        available = intersection(loopUps[idx], available);
        if (available.length === 0) return [values[idx], path];

        let result: number = 0;
        let resPath: number[] = [];
        available.forEach((a) => {
            const [localOpt, localPath] = findDeep(a, available, [...path]);
            if (localOpt > result) {
                result = localOpt;
                resPath = localPath;
            }
        });

        if (result === 0) return [values[idx], path];
        return [values[idx] + result, resPath];
    };

    // Finding the optimal results starting from different set index
    let opt: number = 0;
    let optPath: number[] = [];
    allSets.forEach((setIdx) => {
        const [setOpt, setPath] = findDeep(setIdx, allSets, []);
        if (setOpt > opt) {
            opt = setOpt;
            optPath = setPath;
        }
    });

    return optPath;
};
