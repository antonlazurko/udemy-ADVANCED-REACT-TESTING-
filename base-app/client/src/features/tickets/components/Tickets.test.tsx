import { App } from "../../../App";
import { render, screen } from "../../../test-utils";

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
