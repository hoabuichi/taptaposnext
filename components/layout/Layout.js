import Header from "../header/Header";
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function Layout({ isAbout, children }) {
    return (
      <div className={manrope.className}>
        <Header isAbout={isAbout} />
        <main>{children}</main>
      </div>
    );
  }