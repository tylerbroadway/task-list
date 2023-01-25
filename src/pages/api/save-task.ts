import type { NextApiRequest, NextApiResponse } from "next";
import { saveTask } from "@/utils/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const task = JSON.parse(data);
  saveTask(task);

  // TO DO: add error handling

  res.status(200).json({ message: "task saved" });
}
