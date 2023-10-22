import Navigation from "@/components/Navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - My Music App",
  description: "A music app built with Next.js and Tailwind CSS",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
