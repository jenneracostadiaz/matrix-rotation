export type Matrix = number[][];

/**
 * Valida si un array de arrays es una matriz NxN válida.
 * @param data - El input a validar.
 * @returns - Verdadero si es una matriz NxN, de lo contrario lanza un error.
 */
function validateMatrix(data: any): data is Matrix {
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error("La entrada no es un array o está vacía.");
    }

    const n = data.length;
    for (const row of data) {
        if (!Array.isArray(row) || row.length !== n) {
            throw new Error(
                `La matriz debe ser cuadrada (NxN). Se encontró una fila con ${row.length} elementos en una matriz de ${n}x${n}.`,
            );
        }
    }
    return true;
}

/**
 * Rota una matriz NxN en 90 grados en sentido horario.
 * @param matrix - La matriz NxN a rotar.
 * @returns - Una nueva matriz rotada.
 */
export function rotateMatrixCounterClockwise(matrix: Matrix): Matrix {
    validateMatrix(matrix);

    const n = matrix.length;

    const rotatedMatrix: Matrix = Array.from({ length: n }, () =>
        Array(n).fill(0),
    );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotatedMatrix[n - 1 - j][i] = matrix[i][j];
        }
    }

    return rotatedMatrix;
}
