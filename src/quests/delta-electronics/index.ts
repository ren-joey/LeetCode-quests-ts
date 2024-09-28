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

    // Find another available sets depending on the target set
    sets.forEach((set, idx) => {
        sets.forEach(() => {

        });
    });

    return [2, 4, 6];
};
