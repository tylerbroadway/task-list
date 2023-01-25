import { useState } from "react";
import { useRouter } from "next/router";

import { TaskInterface } from "@/types";
import { BASE_URLS } from "@/constants";

import styles from "@/styles/Home.module.css";

const TaskBuilder = () => {
  const router = useRouter();
  const [task, setTask] = useState<TaskInterface>({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
  });

  const handleChange = (event: any) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleAddTask = async () => {
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

    router.reload();
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
