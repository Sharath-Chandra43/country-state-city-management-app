import React, { useState } from "react";
import CityList from "./CityList";
import AddDialog from "./AddDialog";
import "./App.css"; // Import global styles

function StateList({ country, countryIndex, setCountries }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const addCity = (name) => {
    if (name) {
      const updated = [...country.states];
      updated[selectedIndex].cities.push(name);
      updateCountryStates(updated);
    }
    setIsAdding(false);
  };

  const editState = (stateIndex) => {
    const newName = prompt("Edit state name:", country.states[stateIndex].name);
    if (newName && window.confirm("Confirm update?")) {
      const updated = [...country.states];
      updated[stateIndex].name = newName;
      updateCountryStates(updated);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure?")) {
      const updated = country.states.filter((_, i) => i !== stateIndex);
      updateCountryStates(updated);
    }
  };

  const updateCountryStates = (newStates) => {
    setCountries((prev) =>
      prev.map((c, i) => (i === countryIndex ? { ...c, states: newStates } : c))
    );
  };

  return (
    <div className="state-container">
      {country.states.map((state, index) => (
        <div key={index} className="state-card">
          <h3 className="state-title">{state.name}</h3>
          <div className="state-actions">
            <button className="edit-btn" onClick={() => editState(index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteState(index)}>Delete</button>
            <button className="add-btn" onClick={() => { setSelectedIndex(index); setIsAdding(true); }}>Add City</button>
          </div>
          <CityList cities={state.cities} stateIndex={index} updateCountryStates={updateCountryStates} />
        </div>
      ))}
      <AddDialog isOpen={isAdding} onClose={() => setIsAdding(false)} onSubmit={addCity} title="Add City" placeholder="Enter city name" />
    </div>
  );
}

export default StateList;
