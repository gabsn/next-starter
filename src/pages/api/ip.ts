import { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";

export default function ip(req: NextApiRequest, res: NextApiResponse) {
  res.json({ ip: getClientIp(req) });
}
