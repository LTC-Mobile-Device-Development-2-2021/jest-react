import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

import RandomList from "./RandomList";

jest.mock("random-words", () => {
  function mockRandomWords() {
    return ["these", "words", "are", "not", "random"];
  }

  return mockRandomWords;
});

test("renders a list of five random words", () => {
  const { getByRole } = render(<RandomList />);

  const listElement = getByRole("list");

  expect(listElement.childNodes.length).toBe(5);
  expect(listElement).toMatchInlineSnapshot(`
    <ul>
      <li>
        these
      </li>
      <li>
        words
      </li>
      <li>
        are
      </li>
      <li>
        not
      </li>
      <li>
        random
      </li>
    </ul>
  `);
});
