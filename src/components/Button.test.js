import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

test("the child text is rendered as the button text in the DOM", () => {
  // given a button with child text
  const aButton = <Button>Test</Button>;

  // when it is rendered
  const { getByRole } = render(aButton);

  // then the child text is the button text in the DOM
  const element = getByRole("button");
  expect(element.innerHTML).toBe("Test");
});

test("onClick is called when I click the button", () => {
  // arrange
  // render a button that passes in an onClick function
  const onClickTestFn = jest.fn().mockName("onClickTestFn");
  render(<Button onClick={onClickTestFn}>Test</Button>);

  // act
  // click the button
  const buttonElement = screen.getByText("Test");
  userEvent.click(buttonElement);

  // assert
  // onClick function was called
  expect(onClickTestFn).toHaveBeenCalled();
});
