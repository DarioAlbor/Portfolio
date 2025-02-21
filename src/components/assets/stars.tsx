import { useEffect, useRef } from 'react'

export function Stars() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const stars: Array<{ x: number; y: number; size: number; flickerSpeed: number }> = []
    
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        flickerSpeed: Math.random() * 0.05
      })
    }

    let frame = 0
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      stars.forEach(star => {
        const flicker = Math.sin(frame * star.flickerSpeed)
        const alpha = 0.5 + (flicker * 0.5)
        
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={ref} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}