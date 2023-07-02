import '@/styles/globals.css';
import { Noto_Sans } from 'next/font/google';
import Header from './Header';
import { Metadata } from 'next';

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
        </body>
      </html>
    </>
  );
};

export default RootLayout;
