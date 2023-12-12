import { render, screen } from "@testing-library/react";
import App from "./App";
import { fireEvent } from "@testing-library/react";

test("button has correct initial text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");

  expect(colorButton).toHaveTextContent("Change to blue");
});

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns color and text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

test("if checked toggle will button disabled toggled", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).not.toBeDisabled();
  expect(button).toBeEnabled();
});

test("if not checked button able", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
