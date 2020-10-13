import { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";
import dns from "dns";
import { parse } from "tldts";

export default async function ip(req: NextApiRequest, res: NextApiResponse) {
  const ip = getClientIp(req);
  const isGoogleIp = await _isGoogleIp(ip);
  const hostnames = await reverse(ip);
  res.json({ ip, isGoogleIp, hostnames });
}

// https://support.google.com/webmasters/answer/80553
const _isGoogleIp = async (ip: string) => {
  const hostnames = await reverse(ip);
  if (hostnames.length === 0) {
    return false;
  }

  const hostname = hostnames[0];
  if (!hostname.endsWith("googlebot.com") || !hostname.endsWith("google.com")) {
    return false;
  }

  const address = await lookup(hostname);
  return address === ip;
};

async function lookup(hostname: string): Promise<string> {
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, (err, address, _) => {
      if (err) reject(err);
      resolve(address);
    });
  });
}

async function reverse(ip: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err, hostnames) => {
      if (err) reject(err);
      resolve(hostnames);
    });
  });
}
