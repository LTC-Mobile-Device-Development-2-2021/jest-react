import React, { useState } from "react";
import randomWords from "random-words";

export default function RandomList() {
  const items = randomWords(5);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
