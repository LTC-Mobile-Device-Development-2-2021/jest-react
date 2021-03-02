import React, { useEffect, useState } from "react";

const optionList = ["One", "Two", "Three"];

export default function Select(props) {
  const [value, setValue] = useState(props.value);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions(optionList);
    }, 1000);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (typeof props.onChange === "function") {
      props.onChange(event.target.value);
    }
  };

  return (
    <select onChange={handleChange} value={value}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
