import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: 'ByteSpace - Modern Tech & Creator Learning Platform',
  description: 'Empowering learners worldwide with top-tier tech courses, UI/UX asset guides, and creator communities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
