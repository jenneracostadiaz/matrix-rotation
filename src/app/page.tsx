"use client";

import { useState } from "react";
import { MatrixDisplay } from "@/app/_components/MatrixDisplay";
import { type Matrix, rotateMatrixCounterClockwise } from "@/app/_lib/matrix";

export default function HomePage() {
    const [input, setInput] = useState("");
    const [originalMatrix, setOriginalMatrix] = useState<Matrix | null>(null);
    const [rotatedMatrix, setRotatedMatrix] = useState<Matrix | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleRotate = () => {
        setError(null);
        setOriginalMatrix(null);
        setRotatedMatrix(null);

        try {
            const parsedInput = JSON.parse(input);
            const result = rotateMatrixCounterClockwise(parsedInput);
            setOriginalMatrix(parsedInput);
            setRotatedMatrix(result);
        } catch (e: any) {
            if (e instanceof SyntaxError) {
                setError(
                    "Error de sintaxis: Por favor, introduce un array de arrays válido en formato JSON.",
                );
            } else {
                setError(e.message);
            }
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="w-full max-w-md text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Rotador de Matriz NxN
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Pega una matriz en formato JSON (ej. `[[1,2],[3,4]]`) para
                    rotarla 90° en sentido anti-horario.
                </p>

                <form action={handleRotate}>
                    <div className="flex flex-col items-start w-full">
                        <label
                            htmlFor="matrix-input"
                            className="mb-2 font-medium"
                        >
                            Entrada de la Matriz (JSON):
                        </label>
                        <input
                            id="matrix-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
                            placeholder="Ej: [[1, 2], [3, 4]]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Rotar Matriz
                    </button>
                </form>
            </div>

            {error && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-md w-full max-w-md"
                >
                    <strong>Error:</strong> {error}
                </div>
            )}

            <div className="w-full max-w-md flex flex-col md:flex-row md:space-x-8 mt-6">
                {originalMatrix && (
                    <MatrixDisplay
                        matrix={originalMatrix}
                        title="Matriz Original"
                    />
                )}
                {rotatedMatrix && (
                    <MatrixDisplay
                        matrix={rotatedMatrix}
                        title="Matriz Rotada (-90°)"
                    />
                )}
            </div>
        </main>
    );
}
