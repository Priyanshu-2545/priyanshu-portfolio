// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { SocialRail } from '@/components/social-rail';

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshu-portfolio.vercel.app'),
  title: 'Priyanshu Garg | DevOps & Software Engineer',
  description: 'Portfolio of Priyanshu Garg: DevOps, cloud infrastructure, CI/CD automation, and full-stack software projects.',
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
    title: 'Priyanshu Garg | DevOps & Software Engineer',
    description: 'DevOps, cloud infrastructure, CI/CD automation, and full-stack software projects.',
    siteName: 'Priyanshu Garg Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Garg | DevOps & Software Engineer',
    description: 'Building cloud infrastructure, automated delivery pipelines, and full-stack products.',
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
        <meta name="theme-color" content="#090e18" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <SocialRail />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
