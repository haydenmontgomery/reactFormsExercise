import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import { it, expect } from "vitest";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", function () {
  const { queryByText } = render(<BoxList />);
  const addBtn = queryByText("Create Box");
  expect(queryByText('Delete!')).not.toBeInTheDocument();
  fireEvent.click(addBtn);
  expect(queryByText('Delete!')).toBeInTheDocument();
  //const deleteBtn = queryByText("Delete!");
});

it("should add a new box and then delete it", function () {
  const { queryByText } = render(<BoxList />);
  const addBtn = queryByText("Create Box");
  expect(queryByText('Delete!')).not.toBeInTheDocument();
  fireEvent.click(addBtn);
  expect(queryByText('Delete!')).toBeInTheDocument();
  const deleteBtn = queryByText("Delete!");
  fireEvent.click(deleteBtn);
  expect(queryByText('Delete!')).not.toBeInTheDocument();
});