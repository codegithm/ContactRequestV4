import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Providers } from "@/components/providers";
export const metadata: Metadata = {
    title: "ContactRequest",
    description: "Schema-driven lead capture for every partner.",
    icons: {
        icon: "/favicon.svg",
        apple: "/favicon.svg",
    },
};
export default function RootLayout({ children, }: {
    children: React.ReactNode;
}) {
    return (<html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>);
}
