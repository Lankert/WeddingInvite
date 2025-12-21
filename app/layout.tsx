import type { Viewport } from 'next'
import Navbar from './components/navbar';
import floralPattern from '../public/floralPattern.png';
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

const florarPattern = {
  backgroundImage: `url(${floralPattern.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={florarPattern}
        className={'bg-base'}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
