import Header from "../header/Header";
import { Manrope } from 'next/font/google';
import Footer from "../footer/footer";

const manrope = Manrope({ subsets: ['latin'] });

export default function Layout({ isAbout, children }) {
    return (
      <div className={manrope.className}>
        <Header isAbout={isAbout} />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }