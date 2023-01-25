import type { NextApiRequest, NextApiResponse } from "next";

import { deleteTask } from "@/utils/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const taskId: string = JSON.parse(data);
  deleteTask(Number(taskId));

  // TO DO: add error handling

  res.status(200).json({ message: "task deleted" });
}
