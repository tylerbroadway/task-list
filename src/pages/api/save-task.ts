import type { NextApiRequest, NextApiResponse } from "next";
import { saveTask } from "@/utils/storage";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const task = req.body?.task;
  // save task
};
