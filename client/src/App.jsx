import { useState } from "react";
import "./App.css";

function App() {
  const clothesArr = ["shirt", "trouser", "Lhenga", "Pant"];
  const ShoesArr = ["shoes", "heels", "abc", "dfe"];

  const [selectedCloth, setSelectedCloth] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleSlectedCloth = (category) => {
    setSelectedCloth(category);
  };
  const handleSelectedShoe = (category) => {
    setSelectedShoe(category);
  };

  return (
    <div>
      <div>
        <h1>Clothes</h1>
        {clothesArr.map((category, index) => (
          <div key={index}>
            <input
              type="radio"
              checked={selectedCloth === category}
              onChange={() => handleSlectedCloth(category)}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>
      <div>
        <h1>Shoes</h1>
        {ShoesArr.map((category, index) => (
          <div key={index}>
            <input
              type="radio"
              checked={selectedShoe === category}
              onChange={() => handleSelectedShoe(category)}
            />
            <label>{category}</label>
          </div>
        ))}
        <div>Selected Items : {selectedCloth + " " + selectedShoe}</div>
      </div>
    </div>
  );
}

export default App;
