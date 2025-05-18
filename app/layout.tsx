import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Avanti Restaurant - Pizza, Döner & mehr in Leer",
  description:
    "Willkommen bei Avanti Restaurant in Leer. Wir bieten Pizza, Döner, Pasta, türkische Spezialitäten und mehr. Bestellen Sie online oder besuchen Sie uns.",
  keywords:
    "Avanti Restaurant, Pizza Leer, Döner Leer, türkische Spezialitäten, italienische Küche, Lieferservice Leer",
  openGraph: {
    title: "Avanti Restaurant - Pizza, Döner & mehr in Leer",
    description:
      "Willkommen bei Avanti Restaurant in Leer. Wir bieten Pizza, Döner, Pasta, türkische Spezialitäten und mehr.",
    url: "https://avanti-restaurant-leer.de",
    siteName: "Avanti Restaurant",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://avanti-restaurant-leer.de",
  },
  authors: [{ name: "Alexej Sz." }],
  generator: "Next.js",
  applicationName: "Avanti Restaurant",
  referrer: "origin-when-cross-origin",
  creator: "Alexej Sz.",
  publisher: "Avanti Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
