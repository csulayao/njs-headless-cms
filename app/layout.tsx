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
  preload: false,
});

const favicon = {
  name: "Fav Icon",
  url: "https://assets.ctfassets.net/oxmmme2a1mec/2JXxca9uhaDPSuIyyB1DtF/7d574d01db3204945fc09536231f467d/favicon.ico"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href={favicon.url} sizes="<generated>" />
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
