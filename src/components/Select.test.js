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

test("The select element's value changes after an option is selected", async () => {
  const { getByRole } = render(<Select />);

  const selectElement = getByRole("combobox");

  await screen.findByText("Two");

  userEvent.selectOptions(selectElement, "Two");

  expect(selectElement).toHaveValue("Two");
});

test("Calls onChange passing it the new value after an option is selected", async () => {
  const onChangeTestFn = jest.fn();

  const { getByRole } = render(<Select onChange={onChangeTestFn} />);

  const selectElement = getByRole("combobox");

  await screen.findByText("Two");

  userEvent.selectOptions(selectElement, "Two");

  expect(onChangeTestFn).toHaveBeenLastCalledWith("Two");
});
