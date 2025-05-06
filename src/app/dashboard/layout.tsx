import React from 'react';
import { inter } from '../ui/fonts';

// export const inter = Inter({ subsets: ['latin'] });



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
