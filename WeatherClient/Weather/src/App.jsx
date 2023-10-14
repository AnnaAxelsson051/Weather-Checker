
import Navigation from "./components/Navigation";
import IntroSection from "./components/IntroSection";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <Navigation />
        <IntroSection/>
      </div>
    </>
  )
}

export default App

