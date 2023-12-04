import { App } from "../../../App";
import { render } from "../../../test-utils";

test("redirect to tickets*:shoId page if seatCount is missing", async () => {
  const { history } = render(<App />, {
    routeHistory: ["/confirm/0?holdId=12345"],
    preloadedState: {
      user: {
        userDetails: { email: "test@test.com" },
      },
    },
  });
  expect(history.location.pathname).toBe("/tickets/0");
});
