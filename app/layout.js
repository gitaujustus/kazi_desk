import { ThemeProvider } from './theme-provider'
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from '@/components/navigations';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}