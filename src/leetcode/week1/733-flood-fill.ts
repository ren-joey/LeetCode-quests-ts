/**
 * 733. Flood Fill
 * Algorithm: Matrix Traversal
 * https://leetcode.com/problems/flood-fill/
 */

const fillAround = (image: number[][], sr: number, sc: number, color: number, bg_color: number): number[][] => {
    if (sr < 0 || sr >= image.length
        || sc < 0 || sc >= image[0].length
        || image[sr][sc] !== bg_color
        || image[sr][sc] === color) return image;

    image[sr][sc] = color;
    image = fillAround(image, sr+1, sc, color, bg_color);
    image = fillAround(image, sr-1, sc, color, bg_color);
    image = fillAround(image, sr, sc+1, color, bg_color);
    image = fillAround(image, sr, sc-1, color, bg_color);

    return image;
};

export const floodFill = (image: number[][], sr: number, sc: number, color: number): number[][] => {
    return fillAround(image, sr, sc, color, image[sr][sc]);
};