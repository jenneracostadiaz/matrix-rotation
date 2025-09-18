import type { Matrix } from "@/app/_lib/matrix";

interface MatrixDisplayProps {
    matrix: Matrix;
    title: string;
}

export function MatrixDisplay({ matrix, title }: MatrixDisplayProps) {}
