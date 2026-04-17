import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { seoCopy } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.tejasmaritime.com"),
  title: seoCopy.title,
  description: seoCopy.description,
  keywords: [
    "Tejas Maritime",
    "marine engineering",
    "ship management company",
    "maritime consultancy",
    "vessel inspection",
    "ultrasonic thickness measurement",
    "naval architecture",
  ],
  openGraph: {
    title: seoCopy.title,
    description: seoCopy.description,
    url: "https://www.tejasmaritime.com",
    siteName: "Tejas Maritime Pvt Ltd",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
