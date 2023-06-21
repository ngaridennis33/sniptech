import Navbar from "@/components /navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components /footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnipTech",
  description: "Blog site created using react app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="wrapper">
            <Navbar />
            <div className="container">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
