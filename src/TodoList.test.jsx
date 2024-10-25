import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import { it, expect } from "vitest";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Task:")
  const addBtn = queryByText("Create Todo");
  expect(queryByText('Test the App')).not.toBeInTheDocument();
  fireEvent.change(input, {target: { value: "Test the App" } })
  fireEvent.click(addBtn);
  expect(queryByText('Test the App')).toBeInTheDocument();
});

it("should add a new todo and then delete it", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Task:")
  const addBtn = queryByText("Create Todo");
  expect(queryByText('Test the App')).not.toBeInTheDocument();
  fireEvent.change(input, {target: { value: "Test the App" } })
  fireEvent.click(addBtn);
  expect(queryByText('Test the App')).toBeInTheDocument();
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  expect(queryByText('Test the App')).not.toBeInTheDocument();
});