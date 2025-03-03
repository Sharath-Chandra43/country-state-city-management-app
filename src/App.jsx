import React, { useState } from "react";
import CountryList from "./components/CountryList";
import AddDialog from "./components/AddDialog";
import  "../src/assets/App.css"; 

 function App() {
  const [countries, setCountries] = useState([]);
  const [isAdding, setIsAdding] = useState(false);


  const addCountry = (name) => {
    if (name) setCountries([...countries, { name, states: [] }]);
    setIsAdding(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">Country, State, and City Management</h1>
      <button className="add-btn" onClick={() => setIsAdding(true)}>Add Country</button>
      <CountryList countries={countries} setCountries={setCountries} className="country-list"/>
      <AddDialog 
        isOpen={isAdding} 
        onClose={() => setIsAdding(false)} 
        onSubmit={addCountry} 
        title="Add Country" 
        placeholder="Enter country name" 
      />
    </div>
  );
}

export default App