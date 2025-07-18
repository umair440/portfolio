import Footer from "./componetnts/Footer";
import Header from "./componetnts/Header";
import "@/tailwind.config"
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 scroll-smooth">
      <body className={inter.className}>
        <div className="container mx-auto">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-black">
              <div className="z-[-10] fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#035a4391,transparent)]"> 
                {/* 034a4391 */}
              </div>
              {/* <Header/> */}
              {children}
              <Footer/>
          </div> 
        </div>
      </body>
    </html>
  );
}
