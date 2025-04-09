import './globals.css'
import type { Metadata } from 'next'
import { MainNav } from '@/components/main-nav'

export const metadata: Metadata = {
  title: 'Блок схеми – Примерна апликация',
  description: 'Примерно приложение с четири задачи и блок схеми'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className="bg-gray-50 text-gray-800">
        <MainNav />
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
