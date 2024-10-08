import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhay Posts Media | Share Your Thoughts with the World",
  description: "Share Your Thoughts and Media with the World and get feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="CP-bBZfPoKzhXDdIAAeb5AvIDbZoMMJToPGRiBTbb00" />
    </head>
      <body className={`${inter.className} min-h-screen`}>
        <Container>
          <Header />
          <main className="flex-grow min-h-[calc(100vh - 130px)]">
            {children}
          </main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
