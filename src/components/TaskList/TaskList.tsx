import { FC } from "react";

import Task from "../Task/Task";
import { TaskListInterface } from "@/types";

import styles from "@/styles/Home.module.css";

const TaskList: FC<TaskListInterface> = ({ taskList }) => {
  return (
    <div className={styles.taskList}>
      {taskList.tasks?.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
