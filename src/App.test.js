import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const setup = () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning tests to react/i);
  const inputName = screen.getByLabelText("name-input");
  const inputLastName = screen.getByLabelText("lastName-input");
  const buttonRegister = screen.getByLabelText("register-button");

  return {
    linkElement,
    inputName,
    inputLastName,
    buttonRegister,
  };
};

test("renders learn react link", () => {
  const { linkElement } = setup();

  expect(linkElement).toBeInTheDocument();
});

test("testing inputs", () => {
  const { inputName, inputLastName, buttonRegister, spanFullName } = setup();

  fireEvent.change(inputName, { target: { value: "João" } });
  expect(inputName.value).toBe("João");

  fireEvent.change(inputLastName, { target: { value: "da Silva" } });
  expect(inputLastName.value).toBe("da Silva");

  userEvent.click(buttonRegister);

  expect(
    screen.getByText("Registration done successfully")
  ).toBeInTheDocument();
});
