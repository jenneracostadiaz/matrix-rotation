import type { Matrix } from "@/app/_lib/matrix";

interface MatrixDisplayProps {
    matrix: Matrix;
    title: string;
}

export function MatrixDisplay({ matrix, title }: MatrixDisplayProps) {
    if (!matrix || matrix.length === 0) {
        return null;
    }

    return (
        <section className="mt-6 w-full">
            <h2 className="font-semibold mb-2 text-center">{title}</h2>
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
                <table className="w-full text-center aspect-square">
                    <tbody>
                        {matrix.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex: number) => (
                                    <td key={cellIndex} className="p-2 text-lg">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
