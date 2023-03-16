import { useState, useEffect, useRef } from 'react'
/* // import styles from '@/styles/Scroll.css' */

function Scroll() {
  const scrollRef = useRef()
  const [scrollWidth, setScrollWidth] = useState(0)
  const [isScrollable, setIsScrollable] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollElement = scrollRef.current
    const isOverflowing = scrollElement.scrollWidth > scrollElement.clientWidth
    setIsScrollable(isOverflowing)
    setScrollWidth(scrollElement.scrollWidth - scrollElement.clientWidth)
  }, [])

  function handleScroll(event) {
    const scrollElement = scrollRef.current
    const scrollAmount = 200
    if (event.target.className === 'scroll-left') {
      scrollElement.scrollLeft -= scrollAmount
      setScrollPosition(scrollElement.scrollLeft / scrollWidth)
    } else if (event.target.className === 'scroll-right') {
      scrollElement.scrollLeft += scrollAmount
      setScrollPosition(scrollElement.scrollLeft / scrollWidth)
    }
  }

  return (
    <div className="scroll-container">
      <div className="scroll" ref={scrollRef}>
        {Array.from(Array(50)).map((_, index) => (
          <div key={index} className="scroll-item">
            Item {index + 1}
          </div>
        ))}
      </div>
      {isScrollable && (
        <div className="scroll-bar">
          <div
            className="scroll-handle"
            style={{ left: `${scrollPosition * 100}%` }}
          />
          <button className="scroll-button scroll-left" onClick={handleScroll}>
            &lt;
          </button>
          <button
            className="scroll-button scroll-right"
            onClick={handleScroll}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}

export default Scroll
