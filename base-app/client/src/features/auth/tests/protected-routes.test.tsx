import userEvent from "@testing-library/user-event";

import { App } from "../../../App";
import { getByRole, render, screen, waitFor } from "../../../test-utils";

test("redirects to sign-in page from /profile when not auth", () => {
  render(<App />, {
    routeHistory: ["/profile"],
  });
  const signInHeader = screen.getByRole("heading", {
    name: /sign/i,
  });
  expect(signInHeader).toBeInTheDocument();
});
test.each([
  {
    route: "/profile",
  },
  {
    route: "/tickets/0",
  },
  {
    route: "/confirm/0?holdId=123&seatCount=2",
  },
])("redirects to sign-in from $route when non auth", ({ route }) => {
  render(<App />, {
    routeHistory: [route],
  });
  const signInHeader = screen.getByRole("heading", {
    name: /sign/i,
  });
  expect(signInHeader).toBeInTheDocument();
});

// test("succesful sign-in flow", async () => {
//   const { history } = render(<App />, { routeHistory: ["/tickets/1"] });

//   const emailField = screen.getByLabelText(/email/i);
//   userEvent.type(emailField, "booking@avancheogcheese.com");

//   const passwordlField = screen.getByLabelText(/password/i);
//   userEvent.type(passwordlField, "iheartcheese");

//   const signInForm = screen.getByTestId("sign-in-form");

//   const signInBtn = getByRole(signInForm, "button", {
//     name: /sign in/i,
//   });
//   userEvent.click(signInBtn);
//   await waitFor(() => {
//     expect(history.location.pathname).toBe("/tickets/1");
//   });
//   expect(history.entries).toHaveLength(1);
// });
// test("succesful sign-up flow", async () => {
//   const { history } = render(<App />, { routeHistory: ["/tickets/1"] });

//   const emailField = screen.getByLabelText(/email/i);
//   userEvent.type(emailField, "booking@avancheofcheese.com");

//   const passwordlField = screen.getByLabelText(/password/i);
//   userEvent.type(passwordlField, "iheartcheese");

//   const signUpBtn = screen.getByRole("button", {
//     name: /Sign up/i,
//   });
//   userEvent.click(signUpBtn);
//   await waitFor(() => {
//     expect(history.location.pathname).toBe("/tickets/1");
//   });

//   expect(history.entries).toHaveLength(1);
// });

test.each([
  {
    testName: "sign-in",
    buttonName: /sign in/i,
  },
  {
    testName: "sign-in",
    buttonName: /sign in/i,
  },
])("succesful $testName flow", async ({ buttonName }) => {
  const { history } = render(<App />, { routeHistory: ["/tickets/1"] });

  const emailField = screen.getByLabelText(/email/i);
  userEvent.type(emailField, "booking@avancheofcheese.com");

  const passwordlField = screen.getByLabelText(/password/i);
  userEvent.type(passwordlField, "iheartcheese");

  const signInForm = screen.getByTestId("sign-in-form");

  const testButtonName = getByRole(signInForm, "button", {
    name: buttonName,
  });
  userEvent.click(testButtonName);
  await waitFor(() => {
    expect(history.location.pathname).toBe("/tickets/1");
  });

  expect(history.entries).toHaveLength(1);
});
