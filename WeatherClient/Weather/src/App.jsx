
import Navigation from "./components/Navigation";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <Navigation />
      </div>
    </>
  )
}

export default App

