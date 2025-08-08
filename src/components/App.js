import React, {useState} from "react";
import ChildComponent1 from "./ChildComponent1.js";
import ChildComponent2 from "./ChildComponent2.js";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 onSelect={handleOptionChange}/>
        <ChildComponent2 onSelect={handleOptionChange}/>
        <p>selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
