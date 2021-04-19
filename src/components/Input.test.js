import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

import Input from "./Input";

test("the value prop appears in the input when initially rendered", () => {
  const { getByRole } = render(<Input value="Default value" />);

  const inputElement = getByRole("textbox");

  expect(inputElement).toHaveValue("Default value");
});

test("the input value changes after typing in the field", async () => {
  const { getByRole } = render(<Input value="Hi" />);

  const inputElement = getByRole("textbox");

  // act
  await userEvent.type(inputElement, "{backspace}{backspace}Hello World!");

  expect(inputElement).toHaveValue("Hello World!");
});

test("call onChange after typing in the field", async () => {
  const onChangeTestFn = jest.fn();
  const { getByRole } = render(<Input value="Hi" onChange={onChangeTestFn} />);

  const inputElement = getByRole("textbox");

  await userEvent.type(inputElement, "{backspace}{backspace}Hello World!");

  expect(onChangeTestFn).toHaveBeenLastCalledWith("Hello World!");
});
