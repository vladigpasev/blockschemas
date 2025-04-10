"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BlockDiagram from "@/components/block-diagram"
import CodeSnippet from "@/components/code-snippet"

export default function Task2Page() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [c, setC] = useState("")

  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<number | null>(null)
  const [isObtuse, setIsObtuse] = useState<boolean | null>(null)

  const handleCalculate = () => {
    setError(null)
    setResult(null)
    setIsObtuse(null)

    const A = parseFloat(a)
    const B = parseFloat(b)
    const C = parseFloat(c)

    // 1) Положителни страни
    if ([A, B, C].some(val => isNaN(val) || val <= 0)) {
      setError("Грешка: всички страни трябва да са положителни числа.")
      return
    }

    // 2) Триъгълно неравенство
    if (!(A + B > C && A + C > B && B + C > A)) {
      setError("Грешка: не е изпълнено триъгълното неравенство (a + b > c и т.н.).")
      return
    }

    // 3) Тъпоъгълен триъгълник: a^2 > b^2 + c^2
    // По условие приемаме, че 'a' е страната, срещу ъгъла, който проверяваме.
    const obtuse = (A * A > B * B + C * C)
    if (!obtuse) {
      setError("Грешка: триъгълникът не е тъпоъгълен (a^2 <= b^2 + c^2).")
      return
    }
    setIsObtuse(true)

    // Изчисляваме B = (4ac + sqrt(2b) + 1) / (4a)
    const val = (4 * A * C + Math.sqrt(2 * B) + 1) / (4 * A)
    setResult(val)
  }

  // Код снипет с основната логика (фокус върху изчисленията):
  const codeString = `
if (A > 0 && B > 0 && C > 0 
    && (A + B > C) 
    && (A + C > B) 
    && (B + C > A) 
    && (A*A > B*B + C*C)) {
  const val = (4*A*C + Math.sqrt(2*B) + 1) / (4*A);
  // ...
} else {
  // Грешка
}
  `.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задача 2</CardTitle>
        <CardDescription>
          - Проверете (1) положителни страни, (2) триъгълно неравенство, (3) тъпоъгълност. 
          <br />
          - Ако е ОК, изчислете: (4ac + √(2b) + 1) / (4a)
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <BlockDiagram src="/2.jpg" alt="Блок схема Задача 2" />

        <div>
          <label className="block mb-2 text-sm font-medium">Страна a:</label>
          <Input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Въведете a"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Страна b:</label>
          <Input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Въведете b"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Страна c:</label>
          <Input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            placeholder="Въведете c"
          />
        </div>

        <CodeSnippet code={codeString} />
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button onClick={handleCalculate}>Изчисли</Button>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {result !== null && isObtuse && !error && (
          <div className="text-sm space-y-1">
            <div>Резултат (B): {result.toFixed(2)}</div>
            <div>Триъгълникът е тъпоъгълен.</div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
