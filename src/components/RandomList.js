import React, { useState } from "react";
import randomWords from "random-words";

export default function RandomList(props) {
  const items = randomWords(props.count === undefined ? 6 : props.count);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
