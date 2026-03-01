import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rohith YP | AIML Engineering Student & Web Developer',
  description: 'Portfolio of Rohith YP, a 2nd year AIML Engineering student specializing in modern, responsive, and 3D animated web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}