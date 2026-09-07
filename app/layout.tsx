import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'CET — Energy intelligence | Design directions',description:'Explore four CET Singapore homepage concepts, including a Liquid Glass SaaS landing page.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
