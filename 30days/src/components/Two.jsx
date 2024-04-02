import React, { useState } from 'react'

function Two() {
    const [count, setCount] = useState();

    const addValue = () => {
        setCount(count + 1)
    }

    const removeValue = () => {
        setCount(count - 1)
    }

  return (
    <>
    <h1>Counter</h1>
    <h2>Count: {Count}</h2>

    <button onClick={addValue}>
        Add{count}
    </button>
    <br />
    <button onClick={removeValue}>
        remove{count}
    </button>
    <footer>value: {count}</footer>


    </>
  )
}

export default Two