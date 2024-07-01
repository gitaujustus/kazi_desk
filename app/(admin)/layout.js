import { ThemeProvider } from '../theme-provider';
import { Inter } from "next/font/google";
import AdminBar from '@/components/adminBar';
import '../globals.css'
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AdminBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}