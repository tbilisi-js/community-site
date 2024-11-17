import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "../components/elements/header";
import { Footer } from "../components/elements/footer";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Tbilisi JS",
    description: "Tbilisi JS Community Website",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en" className="scroll-p-16">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
