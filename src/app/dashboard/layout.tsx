import '@/app/globals.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Page',
  
};
 
export default function DashboardLayout({
  children,
}: {{
  children: React.ReactNode
}}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}