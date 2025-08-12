import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hyperfocus Zone Ultra",
    description: "Next.js 15.4.4 Ultra Portal",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
