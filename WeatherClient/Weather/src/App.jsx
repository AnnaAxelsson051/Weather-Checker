import IntroSection from "./components/IntroSection";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState(["Stockholm"]);

  const handleCitySubmit = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  return (
    <>
        <div>
        <Navigation />
        <IntroSection/>
          <Carousel weatherData={cities} />    
      </div>
    </>
  )
}

export default App



