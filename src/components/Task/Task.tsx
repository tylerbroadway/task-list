import { FC } from "react";

import { TaskInterface } from "@/types";

const Task: FC<TaskInterface> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" onClick={() => null}>
        Completed
      </button>
    </div>
  );
};

export default Task;
