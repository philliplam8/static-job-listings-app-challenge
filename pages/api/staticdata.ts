import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  // Read the json file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  // Return the content of the data file in json format
  res.status(200).json(fileContents);
}
