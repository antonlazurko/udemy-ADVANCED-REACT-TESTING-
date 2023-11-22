import { render, screen } from "../../../test-utils";
import { UserProfile } from "./UserProfile";

const testUser = {
  email: "test@testUser.com",
};
test("greetings", () => {
  render(<UserProfile />, {
    preloadedState: { user: { userDetails: testUser } },
  });
  expect(screen.getByText(/hi, test@testUser.com/i)).toBeInTheDocument();
});
test("redirects if user is falsy", () => {
  render(<UserProfile />);
  expect(screen.queryByText(/hi/i)).not.toBeInTheDocument();
});
