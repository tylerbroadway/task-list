import path from "path";
import { promises as fs } from "fs";

import { TaskInterface } from "@/types";

export const getTasks = async () => {
  // Find the absolute path of the json directory
  const dbDirectory = path.join(process.cwd(), "data");
  // Read from tasks.json & assign to tasks
  const taskList = await fs.readFile(dbDirectory + "/tasks.json", "utf8");

  return taskList;
};

export const saveTask = async (task: TaskInterface) => {
  const dbDirectory = path.join(process.cwd(), "data");
  const data = await fs.readFile(dbDirectory + "/tasks.json", "utf8");
  const taskList = JSON.parse(data);
  taskList.tasks.push(task);

  await fs.writeFile(
    dbDirectory + "/tasks.json",
    JSON.stringify(taskList),
    "utf8"
  );
};

export const deleteTask = async (id: number) => {
  const dbDirectory = path.join(process.cwd(), "data");
  const data = await fs.readFile(dbDirectory + "/tasks.json", "utf8");
  const taskList = JSON.parse(data);

  taskList.tasks?.forEach((task: TaskInterface, idx: number) => {
    if (task.id === id) {
      taskList.tasks?.splice(idx, 1);
    }
  });

  await fs.writeFile(
    dbDirectory + "/tasks.json",
    JSON.stringify(taskList),
    "utf8"
  );
};
