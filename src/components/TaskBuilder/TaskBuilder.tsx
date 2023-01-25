import { ChangeEventHandler, useState } from "react";
import { TaskInterface } from "@/types";
import { BASE_URLS } from "@/constants";

import styles from "@/styles/Home.module.css";

const TaskBuilder = () => {
  const [task, setTask] = useState<TaskInterface>({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
  });

  const handleChange = (event: any) => {
    console.log(event);

    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleAddTask = async () => {
    console.log("task: ", task);

    const json = JSON.stringify(task);

    const res = await fetch(
      `${BASE_URLS[process.env.NODE_ENV]}/api/save-task`,
      {
        method: "POST",
        body: json,
      }
    );

    if (!res.ok) {
      console.log("Failed to save task");
    }
  };

  return (
    <div className={styles.taskBuilder}>
      <div className={styles.input}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleAddTask}>
        Save
      </button>
    </div>
  );
};

export default TaskBuilder;
