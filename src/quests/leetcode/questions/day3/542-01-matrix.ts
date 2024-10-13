/**
 * TODO:
 * 543. 01 Matrix
 * Algorithm: BFS, Queue
 * https://leetcode.com/problems/01-matrix/description/
 */

// function updateMatrix(mat: number[][]): number[][] {
//     const zeros: number[][] = [];
//     const res = mat;
//     mat.forEach((row, y) => {
//         row.forEach((item, x) => {
//             if (item === 0) {
//                 zeros.push([y, x]);
//             }
//         });
//     });
//     mat.forEach((row, y) => {
//         row.forEach((item, x) => {
//             let min = Infinity;
//             if (item !== 0) {
//                 zeros.some((zero) => {
//                     min = Math.min(min, Math.abs(zero[0] - y) + Math.abs(zero[1] - x));
//                     if (min === 1) return true;
//                 });
//                 res[y][x] = min;
//             }
//         });
//     });
//     return res;
// };

export const updateMatrix = (mat: number[][]): number[][] => {
    const w = mat[0].length;
    const h = mat.length;
    const queue: number[][] = [];
    const shift = [0, 1, 0, -1, 0];

    mat.forEach((row, y) => {
        row.forEach((num, x) => {
            if (num === 0) {
                queue.push([y, x]);
            } else mat[y][x] = -1;
        });
    });

    while (queue.length > 0) {
        const [oy, ox] = queue.shift() as number[];
        for (let i = 0; i < shift.length - 1; i += 1) {
            const y = oy + shift[i];
            const x = ox + shift[i+1];
            if (y < 0 || y == h || x < 0 || x == w || mat[y][x] !== -1) continue;
            mat[y][x] = mat[oy][ox] + 1;
            queue.push([y, x]);
        }
    }

    return mat;
};