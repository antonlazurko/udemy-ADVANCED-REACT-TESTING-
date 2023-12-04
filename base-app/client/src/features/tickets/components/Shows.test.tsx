import { getByRole, getByText, render, screen } from "../../../test-utils";
import { Shows } from "./Shows";

test("displays relevant show details for non-sold-out shows", async () => {
  render(<Shows />);
  const shows = await screen.findAllByRole("listitem");
  const nonSoldWhow = shows[0];
  const ticketButton = getByRole(nonSoldWhow, "button", {
    name: /tickets/i,
  });
  expect(ticketButton).toBeInTheDocument();
  const bandName = getByRole(nonSoldWhow, "heading", {
    name: /avalanche of Cheese/i,
  });
  expect(bandName).toBeInTheDocument();
  const bandDescr = getByText(
    nonSoldWhow,
    "rollicking country with ambitious kazoo solos"
  );
  expect(bandDescr).toBeInTheDocument();
});

test("displays relevant show details for sold-out shows", async () => {
  render(<Shows />);
  const shows = await screen.findAllByRole("listitem");
  const soldWhow = shows[1];

  const soldOutMessage = getByRole(soldWhow, "heading", {
    name: /Sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();
  const bandName = getByRole(soldWhow, "heading", {
    name: /The Joyous Nun Riot/i,
  });
  expect(bandName).toBeInTheDocument();
  const bandDescr = getByText(
    soldWhow,
    "serious world music with an iconic musical saw"
  );
  expect(bandDescr).toBeInTheDocument();
});
test("displays bands with url", async () => {
  render(<Shows />);
  const shows = await screen.findAllByRole("listitem");
  const soldWhow = shows[1];

  const soldOutMessage = getByRole(soldWhow, "heading", {
    name: /Sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();
  const bandName = getByRole(soldWhow, "heading", {
    name: /The Joyous Nun Riot/i,
  });
  expect(bandName).toBeInTheDocument();
  const bandDescr = getByText(
    soldWhow,
    "serious world music with an iconic musical saw"
  );
  expect(bandDescr).toBeInTheDocument();
});
