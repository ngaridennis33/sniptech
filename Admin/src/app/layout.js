import "../styles/global.scss"
import { Inter } from "next/font/google";

import { ThemeProvider } from "../../context/ThemeContext";
import SideBar from "@/components /dashboard/sideBar/SideBar";
import NavBarDash from "@/components /dashboard/navBarDash/NavBarDash";
import Footer from "@/components /footer/Footer";

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
          <div className="wrapper">
            <NavBarDash />
            <div className="container">
              <SideBar />
              <div className="content">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
