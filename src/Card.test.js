import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


it("renders a carousel without crashing", function () {
  render(<Card />);
})

it("matches the snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
})