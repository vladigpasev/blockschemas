"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BlockDiagram from "@/components/block-diagram"
import CodeSnippet from "@/components/code-snippet"

export default function Task3Page() {
  const [nValue, setNValue] = useState("")
  const [sum, setSum] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    setError(null)
    setSum(null)

    const n = parseInt(nValue)
    if (isNaN(n) || n <= 0) {
      setError("Грешка: моля, въведете цяло положително число n.")
      return
    }

    let s = 0
    for (let i = 1; i <= n; i++) {
      // (3 * i) / (i + 1)
      s += (3 * i) / (i + 1)
    }
    setSum(s)
  }

  // Код снипет (основна логика):
  const codeString = `
for (let i = 1; i <= n; i++) {
  sum += (3 * i) / (i + 1);
}
  `.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задача 3</CardTitle>
        <CardDescription>
          Изчислете сумата на първите n члена от редицата: 3/2 + 6/3 + 9/4 + ...
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <BlockDiagram src="/3.jpg" alt="Блок схема Задача 3" />

        <div>
          <label className="block mb-2 text-sm font-medium">n:</label>
          <Input
            type="number"
            value={nValue}
            onChange={(e) => setNValue(e.target.value)}
            placeholder="Въведете n"
          />
        </div>

        <CodeSnippet code={codeString} />
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button onClick={handleCalculate}>Изчисли</Button>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {sum !== null && !error && (
          <div className="text-sm">
            Резултат: {sum.toFixed(2)}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
