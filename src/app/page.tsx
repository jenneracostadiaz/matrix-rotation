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
}
