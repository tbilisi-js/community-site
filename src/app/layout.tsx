import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";

import { Header } from "../components/elements/header";
import { Footer } from "../components/elements/footer";

import "./globals.scss";

const jersey = Jersey_10({
    weight: ["400"],
    variable: "--font-jersey",
    fallback: ["Tahoma", "sans-serif"],
    preload: true,
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tbilisi JS",
    description: "Tbilisi JS Community Website",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={jersey.variable}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
