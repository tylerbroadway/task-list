import { FC } from "react";
import { useRouter } from "next/router";

import { TaskInterface } from "@/types";
import { BASE_URLS } from "@/constants";

import styles from "@/styles/Home.module.css";

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

    // reload to trigger getServerSideProps
    router.reload();
  };

  return (
    <div className={styles.task}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button type="button" onClick={handleComplete}>
        Complete
      </button>
    </div>
  );
};

export default Task;
