import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caleb Harris",
  description: "Portfolio",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body j={inter.className}>{children}</body>
    </html>
  );
};

export default Layout;
