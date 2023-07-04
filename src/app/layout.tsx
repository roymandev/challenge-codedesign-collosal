import '@/styles/globals.css';
import { Noto_Sans } from 'next/font/google';
import Header from './Header';
import { Metadata } from 'next';
import SectionCallout from './SectionCallout';
import Image from 'next/image';
import Background from '~/background-footer.svg';
import Footer from './Footer';

const font = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '500', '400', '600'],
  variable: '--font-noto-sans',
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Collosal',
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <html lang="en" className={font.className}>
        <body className="bg-dark text-white">
          <Header />
          {children}
          <div className="relative">
            <Image
              alt=""
              src={Background}
              className="absolute inset-x-0 z-[-1] mx-auto object-contain px-4"
            />
            <SectionCallout />
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
