import type { NextApiRequest, NextApiResponse } from "next";

import client from "../../../sanity-client";

import homePageQuery from "@/src/constants/sanityQueries/homePageQuery";

type ObjectWithStringValues = { [key: string]: any };

type Data = {
  home?: ObjectWithStringValues[];
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const home = await client.fetch(homePageQuery);

    res.status(200).json({ home });
  } catch (error) {
    res.status(404).json({ errorMessage: "Couldn't find home data." });
  }

  res.end();
}
