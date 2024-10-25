import { describe, expect, test } from "@jest/globals";

import {
    Codec
} from '../../../src/leetcode';

describe('271. Encode and Decode Strings', () => {
    const cases: [string[], string][] = [
        [["Hello", "World"], "5/Hello5/World"],
        [["Hello", "World", "Foo", "Bar"], "5/Hello5/World3/Foo3/Bar"],
        [["Hello", "World", "Foo", "Bar", "Baz"], "5/Hello5/World3/Foo3/Bar3/Baz"],
    ];

    const codec = new Codec();
    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1} encode
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            expect(
                codec.encode(c[0])
            ).toEqual(c[1]);
        });

        test(`
            Case ${idx+1} decode
            Input: ${c[1]}
            Expected: ${c[0]}
            `, () => {
            expect(
                codec.decode(c[1])
            ).toEqual(c[0]);
        });
    });
});