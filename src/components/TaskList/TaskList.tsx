import { FC } from "react";

import Task from "../Task/Task";
import { TaskListInterface } from "@/types";

const TaskList: FC<TaskListInterface> = ({ taskList }) => {
  console.log("taskList: ", taskList);

  return (
    <div className="taskList">
      {taskList.tasks?.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
