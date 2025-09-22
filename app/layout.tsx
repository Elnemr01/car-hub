import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { assets } from "@/public/assets";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Developed by Elnemr",
  icons : {
    icon : './logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
