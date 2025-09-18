import { describe, expect, it } from "vitest";
import { rotateMatrixCounterClockwise } from "./matrix";

describe("rotateMatrixClockwise", () => {
    it("debe rotar correctamente una matriz de 2x2", () => {
        const input = [
            [1, 2],
            [3, 4],
        ];
        const expected = [
            [2, 4],
            [1, 3],
        ];

        const result = rotateMatrixCounterClockwise(input);
        expect(result).toEqual(expected);
    });
});
