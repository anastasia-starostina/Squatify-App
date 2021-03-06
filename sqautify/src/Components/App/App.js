import "./App.css";
import Header from "../Header/Header";
import InputSection from "../InputSection/InputSection.jsx";
import Insight from "../Insight/Insight";
import { useState } from "react";

function App() {
  const [trigger, setTrigger] = useState(false);
  function callSetTrigger() {
    setTrigger(!trigger);
    console.log(`this is the trigger: ${trigger}`);
  }

  return (
    <div className="App">
      <Header />
      <InputSection handleTrigger={callSetTrigger} />
      <Insight trigger={trigger} />
    </div>
  );
}

export default App;

/*
APP | State
  InputSection 
    Button 
  
  Insight 
    





*/
