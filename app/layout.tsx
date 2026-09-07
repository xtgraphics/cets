import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'CET — Energy intelligence | Design directions',description:'Explore three CET Singapore homepage concepts: Modern, Enterprise, and Trendy with rich interaction.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
