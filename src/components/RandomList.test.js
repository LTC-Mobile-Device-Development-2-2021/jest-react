import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

import RandomList from "./RandomList";

const randomWords = [
  "these",
  "words",
  "are",
  "not",
  "really",
  "random",
  "but",
  "they",
  "are",
  "mocked",
];

jest.mock("random-words", () => {
  function mockRandomWords(count) {
    return randomWords.slice(0, count);
  }

  return mockRandomWords;
});

test("renders a list of six random words", () => {
  const { getByRole } = render(<RandomList />);

  const listElement = getByRole("list");

  expect(listElement.childNodes.length).toBe(6);
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
        really
      </li>
      <li>
        random
      </li>
    </ul>
  `);
});

test("renders a list of ten random words", () => {
  const { getByRole } = render(<RandomList count={10} />);

  const listElement = getByRole("list");

  expect(listElement.childNodes.length).toBe(10);
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
        really
      </li>
      <li>
        random
      </li>
      <li>
        but
      </li>
      <li>
        they
      </li>
      <li>
        are
      </li>
      <li>
        mocked
      </li>
    </ul>
  `);
});
