import { App } from "../../../App";
import { render, screen } from "../../../test-utils";

test("redirects to sign-in page from /profile when not auth", () => {
  render(<App />, {
    routeHistory: ["/profile"],
  });
  const signInHeader = screen.getByRole("heading", {
    name: /sign/i,
  });
  expect(signInHeader).toBeInTheDocument();
});
