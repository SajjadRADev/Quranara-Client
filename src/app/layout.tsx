import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const Pelak = localFont({
    src: "./fonts/PelakFA-Regular.woff2",
    variable: "--font-pelak",
});

const PelakMedium = localFont({
    src: "./fonts/PelakFA-Medium.woff2",
    variable: "--font-pelak-medium",
});

const PelakSemiBold = localFont({
    src: "./fonts/PelakFA-SemiBold.woff2",
    variable: "--font-pelak-semibold",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={`${Pelak.variable} ${PelakMedium.variable} ${PelakSemiBold.variable}`}>
            <body className="font-pelak bg-gray-50 dark:bg-gray-900">{children}</body>
        </html>
    );
}
