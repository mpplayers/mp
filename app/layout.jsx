export const metadata = {
  title: "MP Players Cars — Online Dealership",
  description: "Source any car nationwide. 7.5% APR finance. Free delivery.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
