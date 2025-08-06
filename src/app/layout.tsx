import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'  // adjust or remove if using other fonts

export const metadata = {
  title: 'OMF',
  description: 'Mortgages made simple. Onshore. Offshore. Overseas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans?.variable || ''} ${GeistMono?.variable || ''} antialiased`}>
        {children}
      </body>
    </html>
  );
}
