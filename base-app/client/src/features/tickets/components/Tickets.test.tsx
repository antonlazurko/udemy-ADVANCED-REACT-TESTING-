import { App } from "../../../App";
import { fireEvent, render, screen } from "../../../test-utils";

test("tickets page shows by id", async () => {
  render(<App />, {
    routeHistory: ["/tickets/0"],
    preloadedState: {
      user: {
        userDetails: { email: "test@test.com" },
      },
    },
  });
  const heading = await screen.findByRole("heading", {
    name: /avalanche of Cheese/i,
  });
  expect(heading).toBeInTheDocument();
});
test("purchase button pushes the correct URL", async () => {
  const { history } = render(<App />, {
    routeHistory: ["/tickets/0"],
    preloadedState: {
      user: {
        userDetails: { email: "test@test.com" },
      },
    },
  });
  const purchaseBtn = await screen.findByRole("button", {
    name: /purchase/i,
  });
  fireEvent.click(purchaseBtn);
  expect(history.location.pathname).toBe("/confirm/0");
  const searchRegex = expect.stringMatching(/holdId=\d+&seatCount=2/);
  expect(history.location.search).toEqual(searchRegex);
});
