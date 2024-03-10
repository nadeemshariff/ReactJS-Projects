import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='container mx-100'>
      <div className='bg-red-600'>
        Hey Iam here
      </div>
    </div>
    </>
  )
}

export default App
