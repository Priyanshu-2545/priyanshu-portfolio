// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshu-portfolio.vercel.app'),
  title: 'Priyanshu Garg - DevOps Engineer & Full-Stack Developer',
  description: 'DevOps engineer specializing in AWS, Kubernetes, CI/CD pipelines, and cloud infrastructure. Building scalable systems with Node.js, Next.js, and PostgreSQL.',
  keywords: ['DevOps', 'AWS', 'Kubernetes', 'Full-Stack Developer', 'Cloud Engineer', 'CI/CD'],
  authors: [{ name: 'Priyanshu Garg' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priyanshu-portfolio.vercel.app',
    title: 'Priyanshu Garg - DevOps Engineer & Full-Stack Developer',
    description: 'DevOps engineer specializing in AWS, Kubernetes, and cloud infrastructure.',
    siteName: 'Priyanshu Garg Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Garg - DevOps Engineer',
    description: 'Building scalable cloud infrastructure and DevOps solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
