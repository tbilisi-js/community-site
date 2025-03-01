import { type Metadata, type Viewport } from "next/types";
import localFont from "next/font/local";

import { Header } from "../components/elements/header";
import { Footer } from "../components/elements/footer";

import "./globals.scss";

const fontspring = localFont({
    src: [
        { path: "../assets/fonts/realtimetest-regular.otf", weight: "400", style: "regular" },
        { path: "../assets/fonts/realtimetest-black.otf", weight: "900", style: "black" },
    ],
    variable: "--font-main",
});

export const metadata: Metadata = {
    title: "Tbilisi JS",
    description: "Tbilisi JS Community Website",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FF8022" },
        { media: "(prefers-color-scheme: dark)", color: "#001020" },
    ],
    colorScheme: "dark",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={fontspring.variable}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
