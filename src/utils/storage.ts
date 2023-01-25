import { promises as fs } from "fs";

import { TaskInterface } from "@/types";
import { DB_PATH } from "@/constants";

export const getTasks = async () => {
  // Read from tasks.json & assign to taskList
  const taskList = await fs.readFile(DB_PATH, "utf8");

  return taskList;
};

export const saveTask = async (task: TaskInterface) => {
  const data = await getTasks();
  const taskList = JSON.parse(data);
  taskList.tasks.push(task);

  await fs.writeFile(DB_PATH, JSON.stringify(taskList), "utf8");
};

export const deleteTask = async (id: number) => {
  const data = await getTasks();
  const taskList = JSON.parse(data);

  taskList.tasks?.forEach((task: TaskInterface, idx: number) => {
    if (task.id === id) {
      taskList.tasks.splice(idx, 1);
    }
  });

  await fs.writeFile(DB_PATH, JSON.stringify(taskList), "utf8");
};
