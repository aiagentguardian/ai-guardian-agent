import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'AI Guardian Network - Security Analysis',
  description: 'AI-powered security analysis for your repositories',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/web-app-manifest-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/web-app-manifest-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AI Guardian Network',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}