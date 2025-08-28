// app/layout.tsx
import type { ReactNode } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-black">
        {children}
      </body>
    </html>
  );
}
