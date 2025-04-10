"use client"

import { useState } from "react"
import Link from "next/link"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi" // Примерно икони от react-icons

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full bg-white shadow">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        {/* Лого или заглавие */}
        <div className="font-bold text-xl">Блок схеми</div>

        {/* Иконка за hamburger (показва се на мобилни) */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        {/* Линкове (за desktop) */}
        <div className="hidden md:flex space-x-4">
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

      {/* Линкове (за mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="/"
                className="text-sm font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Начало
              </Link>
            </li>
            <li>
              <Link
                href="/task1"
                className="text-sm font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Задача 1
              </Link>
            </li>
            <li>
              <Link
                href="/task2"
                className="text-sm font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Задача 2
              </Link>
            </li>
            <li>
              <Link
                href="/task3"
                className="text-sm font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Задача 3
              </Link>
            </li>
            <li>
              <Link
                href="/task4"
                className="text-sm font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Задача 4
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
