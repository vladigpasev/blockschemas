"use client"

import Link from "next/link"

export function MainNav() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-xl">Блок схеми</div>
        <div className="space-x-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            Начало
          </Link>
          <Link href="/task1" className="text-sm font-medium hover:underline">
            Задача 1
          </Link>
          <Link href="/task2" className="text-sm font-medium hover:underline">
            Задача 2
          </Link>
          <Link href="/task3" className="text-sm font-medium hover:underline">
            Задача 3
          </Link>
          <Link href="/task4" className="text-sm font-medium hover:underline">
            Задача 4
          </Link>
        </div>
      </nav>
    </header>
  )
}
