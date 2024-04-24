import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Átila Vinicius - Fique por dentro',
  description: 'Agende seu atendimento de maquiagem. Aqui você é única!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={
          ubuntu.className +
          ' text-[#2F2F2F] selection:bg-primary selection:text-blackish flex flex-col min-h-dvh'
        }
      >
        <div className='flex-grow flex flex-col'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
