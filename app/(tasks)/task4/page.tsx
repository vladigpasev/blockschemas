"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BlockDiagram from "@/components/block-diagram"
import CodeSnippet from "@/components/code-snippet"

export default function Task4Page() {
  const [nValue, setNValue] = useState("")
  const [sum, setSum] = useState<number | null>(null)

  const handleCalculate = () => {
    const n = parseInt(nValue)
    if (isNaN(n) || n <= 0) {
      setSum(null)
      return
    }

    let s = 0
    for (let k = 1; k <= n; k++) {
      // (-1)^k * (k + 1)
      s += Math.pow(-1, k) * (k + 1)
    }
    setSum(s)
  }

  // Код снипет
  const codeString = `
for (let k = 1; k <= n; k++) {
  s += Math.pow(-1, k) * (k + 1);
}
  `.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задача 4</CardTitle>
        <CardDescription>
          Изчислете сумата на първите n члена от редицата: -2 + 3 - 4 + 5 - 6 + ...
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Блок схема */}
        <BlockDiagram src="/block-diagrams/task4.png" alt="Блок схема Задача 4" />

        <div>
          <label className="block mb-2 text-sm font-medium">n:</label>
          <Input
            type="number"
            value={nValue}
            onChange={(e) => setNValue(e.target.value)}
            placeholder="Въведете n"
          />
        </div>

        {/* Code Snippet */}
        <CodeSnippet code={codeString} />
      </CardContent>

      <CardFooter className="flex gap-4">
        <Button onClick={handleCalculate}>Изчисли</Button>
        {sum !== null && (
          <div className="text-sm">
            Резултат: {sum.toFixed(2)}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
