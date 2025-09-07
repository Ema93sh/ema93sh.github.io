import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ema93sh.github.io"),
  title: "Magesh Kumar Murali",
  description: "Senior Software Engineer",
  openGraph: {
    title: "Magesh Kumar Murali",
    description: "Senior Software Engineer",
    url: "https://ema93sh.github.io",
    images: [
      {
        url: "https://ema93sh.github.io/globe.svg",
        width: 1200,
        height: 630,
        alt: "Magesh Kumar Murali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magesh Kumar Murali",
    description: "Senior Software Engineer",
    images: ["https://ema93sh.github.io/globe.svg"],
    site: "https://ema93sh.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow dark:focus:bg-gray-900"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
