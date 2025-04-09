"use client"

import { FC } from "react"

// Ако искате да ползвате Code от shadcn/ui,
// ще трябва да имате инсталиран и настроен компонент.
// За илюстрация ще покажем обикновен <pre><code>.

interface CodeSnippetProps {
  code: string
}

const CodeSnippet: FC<CodeSnippetProps> = ({ code }) => {
  return (
    <div className="my-4 bg-gray-100 p-4 rounded">
      <pre className="text-sm whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
