import fs from "fs";
import { TaskInterface } from "@/types";

export const getTasks = () => {
  let taskList;

  fs.readFile(
    "tasks.json",
    "utf8",
    function readFileCallback(err: any, data: any) {
      if (err) {
        console.log(err);
      } else {
        taskList = JSON.parse(data);
      }
    }
  );

  return taskList;
};

export const saveTask = (task: TaskInterface) => {
  fs.readFile(
    "tasks.json",
    "utf8",
    function readFileCallback(err: any, data: any) {
      if (err) {
        console.log(err);
      } else {
        const taskList = JSON.parse(data);
        taskList.tasks.push(task);
        const json = JSON.stringify(taskList);
        fs.writeFile("tasks.json", json, "utf8", () => null);
      }
    }
  );
};
