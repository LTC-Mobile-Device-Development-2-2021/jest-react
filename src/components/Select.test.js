import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

import Select from "./Select";

test("the select renders with three options, One, Two, and Three", async () => {
  const { getByRole } = render(<Select />);

  const selectElement = getByRole("combobox");

  await screen.findByText("Two");

  expect(selectElement).toMatchInlineSnapshot(`
    <select>
      <option
        value="One"
      >
        One
      </option>
      <option
        value="Two"
      >
        Two
      </option>
      <option
        value="Three"
      >
        Three
      </option>
    </select>
  `);
});
