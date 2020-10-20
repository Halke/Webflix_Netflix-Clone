import React from "react";
import "../styles/checkbox.css";

function Checkbox({ id, label, onChange }) {
  return (
    <div className="checkbox-div">
      <input type="checkbox" id={id} value={false} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
