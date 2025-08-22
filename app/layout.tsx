import "./../globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
