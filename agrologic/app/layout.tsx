import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Agrologic - Compra y Venta de Berries | Transporte Agrícola',
  description: 'Operador agro-logístico. Compra y venta de berries y transporte agrícola en Chile.',
  keywords: 'berries, transporte agrícola, compra berries, venta berries, agro-logística',
  authors: [{ name: 'Agrologic' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://agrologic.cl',
    title: 'Agrologic - Operador Agro-Logístico',
    description: 'Compra y venta de berries en Chile + transporte de carga agrícola',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}