"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BlockDiagram from "@/components/block-diagram"
import CodeSnippet from "@/components/code-snippet"

export default function Task1Page() {
  const [diagonal, setDiagonal] = useState("")
  const [radius, setRadius] = useState<number | null>(null)
  const [circumference, setCircumference] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    setError(null)
    setRadius(null)
    setCircumference(null)

    const d = parseFloat(diagonal)
    if (isNaN(d) || d <= 0) {
      setError("Грешка: моля, въведете положителна стойност за диагонала (d).")
      return
    }

    const R = d / 2
    const C = 2 * Math.PI * R
    setRadius(R)
    setCircumference(C)
  }

  // Код снипет: основна логика (без пълния error handling – само ядрото)
  const codeString = `
const d = parseFloat(diagonal);
if (!isNaN(d) && d > 0) {
  const R = d / 2;
  const C = 2 * Math.PI * R;
  // setRadius(R), setCircumference(C)
} else {
  // Грешка
}
  `.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задача 1</CardTitle>
        <CardDescription>
          Въведете дължината на диагонала на квадрат и изчислете радиуса и дължината на описаната окръжност.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <BlockDiagram src="/block-diagrams/task1.png" alt="Блок схема Задача 1" />

        <div>
          <label className="block mb-2 text-sm font-medium">Диагонал (d):</label>
          <Input
            type="number"
            value={diagonal}
            onChange={(e) => setDiagonal(e.target.value)}
            placeholder="Въведете d"
          />
        </div>

        <CodeSnippet code={codeString} />
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button onClick={handleCalculate}>Изчисли</Button>

        {error && (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        )}

        {radius !== null && circumference !== null && !error && (
          <div className="space-y-1 text-sm">
            <div>Радиус (R): {radius.toFixed(2)}</div>
            <div>Дължина на окръжността (C): {circumference.toFixed(2)}</div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
