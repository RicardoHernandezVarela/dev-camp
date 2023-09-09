import type { NextApiRequest, NextApiResponse } from "next";

import client from "../../../sanity-client";

type ObjectWithStringValues = { [key: string]: any };

type Data = {
  header?: ObjectWithStringValues[];
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const header = await client.fetch('*[_type == "header"]');

    res.status(200).json({ header });
  } catch (error) {
    res.status(404).json({ errorMessage: "Couldn't find header data." });
  }

  res.end();
}
