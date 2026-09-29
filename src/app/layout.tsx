import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: 'ByteSpace - Modern Tech & Creator Learning Platform',
  description: 'Empowering learners worldwide with top-tier tech courses, UI/UX asset guides, and creator communities.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col w-full overflow-x-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
