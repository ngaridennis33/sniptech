import "../styles/global.scss";
import Navbar from "@/components /navbar/Navbar";
import { Inter } from "next/font/google";

import Footer from "@/components /footer/Footer";
import { ThemeContextProvider } from "../components /context/ThemeContext";
import { HamburgerProvider } from "../components /context/HumbergerContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { ModalProvider } from "@/components /context/ModalContext";

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
              <ModalProvider>
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </ModalProvider>
            </HamburgerProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
