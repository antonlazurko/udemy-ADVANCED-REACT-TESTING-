import { App } from "../../../App";
import { fireEvent, render, screen } from "../../../test-utils";
import { NavBar } from "./NavBar";

test("clicking sign-in pushes '/signin' to history", () => {
  const { history } = render(<NavBar />);
  const signInBtn = screen.getByRole("button", {
    name: /Sign in/i,
  });
  expect(signInBtn).toBeInTheDocument();
  fireEvent.click(signInBtn);
  expect(history.location.pathname).toBe("/signin");
});
test("clicking sign-in shows sign in page", () => {
  render(<App />);
  const signInBtn = screen.getByRole("button", {
    name: /Sign in/i,
  });
  fireEvent.click(signInBtn);
  const heading = screen.getByRole("heading", {
    name: /Sign in to your account/i,
  });
  expect(heading).toBeInTheDocument();
});
