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

  const handleCalculate = () => {
    const d = parseFloat(diagonal)
    if (isNaN(d) || d <= 0) {
      setRadius(null)
      setCircumference(null)
      return
    }
    const R = d / 2
    const C = 2 * Math.PI * R
    setRadius(R)
    setCircumference(C)
  }

  // Основната логика за пресмятане (code snippet)
  const codeString = `
const d = parseFloat(diagonal);
if (!isNaN(d) && d > 0) {
  const R = d / 2;
  const C = 2 * Math.PI * R;
  // setRadius(R), setCircumference(C)
}
  `.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задача 1</CardTitle>
        <CardDescription>
          Въведете дължината на диагонала на квадрат и изчислете радиуса и обиколката на описаната окръжност.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Блок схема */}
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

        {/* Code Snippet */}
        <CodeSnippet code={codeString} />
      </CardContent>

      <CardFooter className="flex gap-4 flex-wrap">
        <Button onClick={handleCalculate}>Изчисли</Button>

        {radius !== null && circumference !== null && (
          <div className="space-y-1 text-sm">
            <div>Радиус: {radius.toFixed(2)}</div>
            <div>Обиколка: {circumference.toFixed(2)}</div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
