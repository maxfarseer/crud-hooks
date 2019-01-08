import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <p>you clicked {count}</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>
  )
}

export { App }
