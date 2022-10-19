import React, { useState } from 'react'

const Cursor = () => {
  const [xy, setXy] = useState({x: 0, y: 0})
  document.addEventListener("mousemove", (e) => {
    setXy({x: e.clientX, y: e.clientY})
  });
  return (
    <div className='cursor' style={{ top: `${xy.y}px`, left: `${xy.x}px` }}></div>
  )
}

export default Cursor