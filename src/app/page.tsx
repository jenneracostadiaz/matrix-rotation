"use client";

import { useState } from "react";
import type { Matrix } from "@/app/_lib/matrix";

export default function HomePage() {
    const [input, setInput] = useState("[[1, 2, 3], [4, 5, 6], [7, 8, 9]]");
    const [originalMatrix, setOriginalMatrix] = useState<Matrix | null>(null);
    const [rotatedMatrix, setRotatedMatrix] = useState<Matrix | null>(null);
    const [error, setError] = useState<string | null>(null);
}
