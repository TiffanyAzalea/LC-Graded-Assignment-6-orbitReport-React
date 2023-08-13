import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((satData) => satData.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

//might need a key???

  return (
    <div>
      <Banner />
      <Buttons 
         filterByType={filterByType}
         setSat={setSat}
         displaySats={displaySats}
      />
      <Table />
    </div>
  );
}

export default App;
