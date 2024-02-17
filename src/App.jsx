import React, { useState } from 'react'

function App() {
  const [color, setcolor] = useState("green") 
  return (
    <>
      <div className="w-fulf h-screen duration-200" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button onClick={() => setcolor('red')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-white' style={{ backgroundColor: "red" }}>RED</button>
            <button onClick={() => setcolor('Yellow')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-black' style={{ backgroundColor: "Yellow" }}>Yellow</button>
            <button onClick={() => setcolor('Green')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-white' style={{ backgroundColor: "Green" }}>Green</button>
            <button onClick={() => setcolor('Blue')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-white' style={{ backgroundColor: "Blue" }}>Blue</button>
            <button onClick={() => setcolor('Black')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-white' style={{ backgroundColor: "Black" }}>Black</button>
            <button onClick={() => setcolor('Lavender')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-black' style={{ backgroundColor: "Lavender" }}>Lavender</button>
            <button onClick={() => setcolor('Orange')} className='outline-none px-4 py-1 rounded-3xl shadow-black shadow-xl text-white' style={{ backgroundColor: "Orange" }}>Orange</button>
          </div>
        </div>
      </div>


    </>

  )
}


export default App
