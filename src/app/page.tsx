"use client";

import { useState } from "react";
import { type Matrix, rotateMatrixCounterClockwise } from "@/app/_lib/matrix";

export default function HomePage() {
    const [input, setInput] = useState("[[1, 2, 3], [4, 5, 6], [7, 8, 9]]");
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
            </div>
        </main>
    );
}
