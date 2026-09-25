import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'CET Singapore | Energy intelligence',
  description:
    'CET Singapore power monitoring, energy management and connected infrastructure solutions.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
