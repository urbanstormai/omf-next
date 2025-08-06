import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'OMF',
  description: 'Mortgages made simple. Onshore. Offshore. Overseas.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
