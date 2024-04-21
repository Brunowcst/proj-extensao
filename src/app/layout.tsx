import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Átila Vinicius - Agendamento',
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
          ' text-[#2F2F2F] selection:bg-primary selection:text-blackish'
        }
      >
        {children}
      </body>
    </html>
  );
}
