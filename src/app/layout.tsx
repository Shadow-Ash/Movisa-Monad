import type { Metadata } from 'next';

import { inter, jetbrainsMono } from '@/config/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'MOVISA',
  description: 'Give AI Agents Real Spending Power',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${jetbrainsMono.variable}
          min-h-screen
          bg-background
          text-onSurface
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}