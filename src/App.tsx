import { useState } from 'react'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <img src={logo} className="logo" alt="logo" />
      </div>
      <h1>JKS-JWT viwer</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
