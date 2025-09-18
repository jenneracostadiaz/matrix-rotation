import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Herramienta para Rotar Matrices",
    description:
        "Rota matrices NxN 90° en sentido anti-horario. Pega una matriz en formato JSON (ej. [[1,2],[3,4]]) para ver la matriz rotada.",
    keywords: [
        "rotar matriz",
        "matrix rotation",
        "NxN matrix",
        "rotate matrix",
        "matrix tool",
    ],
    authors: [{ name: "Jenner Acosta", url: "https://jenner.pe" }],
    openGraph: {
        title: "Herramienta para Rotar Matrices",
        description:
            "Rota matrices NxN 90° en sentido anti-horario. Pega una matriz en formato JSON (ej. [[1,2],[3,4]]) para ver la matriz rotada.",
        url: "https://matrix-rotation.vercel.app/",
        siteName: "Matrix Rotator",
        images: [
            {
                url: "https://matrix-rotation.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Herramienta para Rotar Matrices",
            },
        ],
        locale: "es_PE",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
