import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMP & Pusher - Curated Music Discovery",
  description: "A premium music discovery platform featuring hand-picked playlists across genres and moods.",
  openGraph: {
    title: "CMP & Pusher - Curated Music Discovery",
    description: "A premium music discovery platform featuring hand-picked playlists across genres and moods.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMP & Pusher - Curated Music Discovery",
    description: "A premium music discovery platform featuring hand-picked playlists across genres and moods.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
