import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Leon Wu — Software Engineer",
  description:
    "Portfolio of Tsan-Yu (Leon) Wu — full-stack engineer and CS master's student at Northeastern University.",
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();
`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen font-sans antialiased bg-[var(--bg)] text-[var(--text)]">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 md:ml-56">
          <main className="flex-1 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
            {children}
          </main>
          <footer className="px-6 py-4 md:px-12 text-sm text-[var(--text-muted)] border-t border-[var(--border)]">
            Made by Leon · {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
