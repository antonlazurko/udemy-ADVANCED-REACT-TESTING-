import { rest } from "msw";

import { baseUrl, endpoints } from "../app/axios/constants";
import { bandUrl } from "../features/band/redux/bandApi";
import { showsUrl } from "../features/tickets/redux/showApi";
import { bands, shows } from "../test-utils/fake-data";

const authHandler = (req, res, ctx) => {
  const { email } = req.body;
  return res(ctx.json({ user: { id: 123, email, token: "qwe123" } }));
};

export const handlers = [
  rest.get(showsUrl, (req, res, ctx) => {
    return res(ctx.json({ shows }));
  }),
  rest.get(`${bandUrl}/:bandId`, (req, res, ctx) => {
    const { bandId } = req.params;
    // band id by conveniently the index in the band array
    return res(ctx.json({ band: bands[bandId] }));
  }),
  rest.get(`${showsUrl}/:showId`, (req, res, ctx) => {
    const { showId } = req.params;
    // show id by conveniently the index in the show array
    return res(ctx.json({ show: shows[showId] }));
  }),
  rest.patch(`${showsUrl}/:showId/hold/:holdId`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${baseUrl}/${endpoints.signIn}`, authHandler),
];
