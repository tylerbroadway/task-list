import type { NextApiRequest, NextApiResponse } from "next";

import { getTasks } from "@/utils/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const taskList = await getTasks();

  // TO DO: add error handling

  res.status(200).json(taskList);
}
