import { App } from "../../../App";
import { render, screen } from "../../../test-utils";

test("band page", async () => {
  render(<App />, { routeHistory: ["/bands/0"] });
  const heading = await screen.findByRole("heading", {
    name: /avalanche of Cheese/i,
  });
  expect(heading).toBeInTheDocument();
});
