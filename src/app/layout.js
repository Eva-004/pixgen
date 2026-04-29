import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const outFit = Outfit({
  subsets: ["latin"]
});

export const metadata = {
  title: "PixGen",
  description: "AI Image Generation Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outFit.className} h-full antialiased`}
    >
      <body>
        <Navbar></Navbar>
        <main  className='w-11/12 mx-auto'>
          {children}
          <ToastContainer />
        </main>
        <Footer></Footer>
        </body>
    </html>
  );
}
