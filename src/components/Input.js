import React, { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (typeof props.onChange === "function") {
      props.onChange(event.target.value);
    }
  };

  return <input type="text" onChange={handleChange} value={value} />;
}
