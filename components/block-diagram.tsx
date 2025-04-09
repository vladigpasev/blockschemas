"use client"

import Image from "next/image"
import { FC } from "react"

interface BlockDiagramProps {
  src: string
  alt: string
}

const BlockDiagram: FC<BlockDiagramProps> = ({ src, alt }) => {
  return (
    <div className="my-4">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded border border-gray-200"
      />
    </div>
  )
}

export default BlockDiagram
