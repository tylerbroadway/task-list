import type { NextApiRequest, NextApiResponse } from "next";
import { getTasks } from "@/utils/storage";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const tasks = getTasks();

  res.status(200).json(tasks);
};
