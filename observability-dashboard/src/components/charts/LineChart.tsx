import { useEffect, useRef } from 'react'

export function LineChart({
  data,
}: {
  data: number[]
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const max = Math.max(...data, 1)

    data.forEach((value, i) => {
      const x = (i / data.length) * canvas.width
      const y = canvas.height - (value / max) * canvas.height

      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })

    ctx.stroke()
  }, [data])

  return <canvas ref={canvasRef} width={300} height={100} />
}