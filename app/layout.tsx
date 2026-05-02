import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReceiptScan – OCR Receipts into Tax Categories Instantly",
  description: "Upload receipt photos, AI extracts amount, vendor, and category for tax filing. Built for freelancers earning $30k+ annually."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="383cf72b-f3b4-41fb-a4b4-1102e4eb09ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
