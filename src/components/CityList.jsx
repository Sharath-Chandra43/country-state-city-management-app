import React from "react";
import  "../assets/App.css"; 

function CityList({ cities, stateIndex, updateCountryStates }) {
  // Delete city
  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      updateCountryStates((prevStates) => {
        const updated = [...prevStates];
        updated[stateIndex].cities = updated[stateIndex].cities.filter((_, i) => i !== cityIndex);
        return updated;
      });
    }
  };

  return (
    <div className="city-container">
      {cities.map((city, index) => (
        <div key={index} className="city-card">
          <p className="city-name">{city}</p>
          <button className="delete-btn" onClick={() => deleteCity(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
