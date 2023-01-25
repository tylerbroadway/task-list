import type { NextApiRequest, NextApiResponse } from "next";

import { deleteTask } from "@/utils/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const id: string = JSON.parse(data);
  deleteTask(Number(id));

  // TO DO: add error handling

  res.status(200).json({ message: "task deleted" });
}
