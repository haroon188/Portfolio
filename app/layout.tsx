import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Haroon Shahid | AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Haroon Shahid — AI/ML Engineer specializing in Machine Learning, Deep Learning, Generative AI, LangChain, OpenCV, and Full-Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@400,700,800&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-satoshi: 'Satoshi', sans-serif;
            --font-cabinet: 'Cabinet Grotesk', sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased min-h-screen flex flex-col transition-colors duration-300">
        <Providers attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow flex flex-col relative overflow-hidden">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
