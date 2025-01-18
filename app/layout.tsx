import "./globals.css";
import { Inter } from "next/font/google";
// import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: `Portfolio powered by Contentful and NextJS`,
  description: `This is a site built with Next.js and Contentful.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* TODO: Fix the favico bit */}
        {/* <link rel="icon" href="/icon/?<generated>" type="image/<generated>" sizes="<generated>"/>
        <link rel="apple-touch-icon" href="/apple-icon.png?<generated>" type="image/<generated>" sizes="<generated>"/> */}
        <link rel="icon" href="/favicon.ico" sizes="<generated>" />
      </head>
      <body>
      <section>
      <div className="main">
          <div className="gradient" />
      </div>
      <main className="app">
        <Nav/>
          {children}
      </main>
      </section>
        <Footer />
      </body>
    </html>
  );
}
