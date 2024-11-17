import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: "Alan's Dashboard",
  description: "Alan's personal dashboard",
};

type RootLayoutPropTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
