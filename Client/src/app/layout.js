import "../styles/global.scss";
import Navbar from "@/components /navbar/Navbar";
import { Inter } from "next/font/google";

import Footer from "@/components /footer/Footer";
import { ThemeContextProvider } from "../components /context/ThemeContext";
import { HamburgerProvider } from "../components /context/HumbergerContext";
import ThemeProvider from "@/providers/ThemeProvider";

// Todo Add Roboto font for the Navbar
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnipTech",
  description: "Blog site created using react app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <HamburgerProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </HamburgerProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
