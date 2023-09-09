import "../styles/global.scss"
import Navbar from "@/components /navbar/Navbar";
import { Inter } from "next/font/google";

import Footer from "@/components /footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";
import {
  HamburgerContext,
  HamburgerProvider,
} from "../../context/HumbergerContext";

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
        <ThemeProvider>
          <HamburgerProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar/>
                {children}
                <Footer/>
                </div>
            </div>
          </HamburgerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
