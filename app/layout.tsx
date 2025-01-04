import "./globals.css";
import { Inter } from "next/font/google";
// import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Footer from "@/components/Footer";

export const metadata = {
  title: `Next.js and Contentful Example`,
  description: `This is a blog built with Next.js and Contentful.`,
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
        <link rel="icon" href="/icon/?<generated>" type="image/<generated>" sizes="<generated>"/>
        <link rel="apple-touch-icon" href="/apple-icon.png?<generated>" type="image/<generated>" sizes="<generated>"/>
      </head>
      <body>

        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
