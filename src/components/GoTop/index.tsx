import { useState, useEffect } from 'react'
import Image from 'next/image'
import goTopSvg from '../../assets/icons/go-top.svg'

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div>
          <button
            className="fixed bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-md"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
          >
            <Image src={goTopSvg} alt="Subir ao topo" width={24} height={24} />
          </button>
        </div>
      )}
    </>
  )
}
