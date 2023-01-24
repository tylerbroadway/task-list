import { FC } from "react";

import Task from "../Task/Task";
import { TaskInterface } from "@/types";

interface TaskListInterface {
  tasks: TaskInterface[];
}

const TaskList: FC<TaskListInterface> = ({ tasks }) => {
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
