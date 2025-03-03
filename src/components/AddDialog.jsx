import React, { useState } from "react";
import "./App.css"; // Import global styles

export default function AddDialog({ isOpen, onClose, onSubmit, title, placeholder }) {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <h3>{title}</h3>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="dialog-input"
        />
        <div className="dialog-actions">
          <button className="add-btn" onClick={() => onSubmit(input)}>Add</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
