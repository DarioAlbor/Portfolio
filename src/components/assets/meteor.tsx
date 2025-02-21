import { useEffect, useState } from 'react'

const METEOR_AMOUNT = 4
const MIN_DISTANCE = 200

export function Meteor() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [meteors, setMeteors] = useState<Array<{
    id: number,
    x: number,
    y: number,
    isOrange: boolean
  }>>([])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const createMeteor = () => {
      const x = Math.random() * (windowSize.width - 100) + 100
      const y = Math.random() * (windowSize.height - 100) + 100
      const isOrange = Math.random() > 0.5

      const isTooClose = meteors.some(m => 
        Math.abs(m.x - x) < MIN_DISTANCE
      )

      if (isTooClose) return null

      return { id: Date.now(), x, y, isOrange }
    }

    const addMeteor = () => {
      setMeteors(prev => {
        const newMeteor = createMeteor()
        if (!newMeteor) return prev
        
        if (prev.length >= METEOR_AMOUNT) {
          const [_, ...rest] = prev
          return [...rest, newMeteor]
        }
        return [...prev, newMeteor]
      })
    }

    const interval = setInterval(addMeteor, 1000)
    return () => clearInterval(interval)
  }, [meteors, windowSize])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="absolute h-px w-px"
          style={{
            left: meteor.x,
            top: meteor.y,
          }}
        >
          <span 
            className={`
              absolute
              flex items-center
              h-[1px] w-[150px]
              rotate-[135deg]
              origin-left
              animate-meteor-effect
            `}
          >
            {/* Cabeza del meteoro */}
            <span className={`
              absolute left-0
              h-[2px] w-[2px]
              rounded-full
              animate-meteor-head
              ${meteor.isOrange 
                ? 'bg-orange-400 shadow-[0_0_2px_#f97316]' 
                : 'bg-white shadow-[0_0_2px_#ffffff]'
              }
            `}/>
            
            {/* Cuerpo del meteoro */}
            <span className={`
              absolute left-[2px]
              h-[1px] w-[50px]
              ${meteor.isOrange 
                ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-transparent' 
                : 'bg-gradient-to-r from-white via-white to-transparent'
              }
            `}/>
            
            {/* Cola del meteoro */}
            <span className={`
              absolute left-[52px]
              h-[1px] w-[98px]
              animate-meteor-tail
              ${meteor.isOrange 
                ? 'bg-gradient-to-r from-orange-300/60 via-orange-300/40 to-transparent' 
                : 'bg-gradient-to-r from-white/60 via-white/40 to-transparent'
              }
            `}/>
          </span>
        </div>
      ))}
    </div>
  )
}