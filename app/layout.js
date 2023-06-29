"use client"
import './globals.css'
import { Inter } from 'next/font/google'
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wonder Pass',
  description: 'Abbe isme kya likhu?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script src='https://accounts.google.com/gsi/client' async defer></script>
      <script src="https://smtpjs.com/v3/smtp.js">
</script>
    </html>
  )
}
