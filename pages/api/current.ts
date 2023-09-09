import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);

    return res.status(200).json(currentUser);
  } catch (err) {
    console.log(err);
  }
}
