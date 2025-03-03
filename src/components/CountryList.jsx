import React, { useState } from "react";
import StateList from "./StateList";
import AddDialog from "./AddDialog";
import "./App.css"; // Import global CSS

function CountryList({ countries, setCountries }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const addState = (name) => {
    if (name) {
      const updated = [...countries];
      updated[selectedIndex].states.push({ name, cities: [] });
      setCountries(updated);
    }
    setIsAdding(false);
  };

  const editCountry = (index) => {
    const newName = prompt("Edit country name:", countries[index].name);
    if (newName && window.confirm("Confirm update?")) {
      const updated = [...countries];
      updated[index].name = newName;
      setCountries(updated);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="country-container">
      {countries.map((country, index) => (
        <div key={index} className="country-card">
          <h2 className="country-title">{country.name}</h2>
          <div className="country-actions">
            <button className="edit-btn" onClick={() => editCountry(index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteCountry(index)}>Delete</button>
            <button className="add-btn" onClick={() => { setSelectedIndex(index); setIsAdding(true); }}>Add State</button>
          </div>
          <StateList country={country} countryIndex={index} setCountries={setCountries} />
        </div>
      ))}
      <AddDialog isOpen={isAdding} onClose={() => setIsAdding(false)} onSubmit={addState} title="Add State" placeholder="Enter state name" />
    </div>
  );
}

export default CountryList;
