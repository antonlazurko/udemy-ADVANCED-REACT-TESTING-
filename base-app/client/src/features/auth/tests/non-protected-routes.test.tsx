import { App } from "../../../App";
import { render, screen } from "../../../test-utils";

test("home page does not redirect to login screen", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /welcome/i,
  });
  expect(heading).toBeInTheDocument();
});
