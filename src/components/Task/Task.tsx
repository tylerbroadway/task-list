import { FC } from "react";
import { useRouter } from "next/router";

import { TaskInterface } from "@/types";
import { BASE_URLS } from "@/constants";

const Task: FC<TaskInterface> = ({ id, title, description }) => {
  const router = useRouter();

  const handleComplete = async () => {
    const res = await fetch(
      `${BASE_URLS[process.env.NODE_ENV]}/api/delete-task`,
      {
        method: "POST",
        mode: "no-cors",
        body: id.toString(),
      }
    );

    if (!res.ok) {
      console.log("Failed to delete task");
    }

    router.reload();
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" onClick={handleComplete}>
        Completed
      </button>
    </div>
  );
};

export default Task;
