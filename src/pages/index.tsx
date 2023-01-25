import { FC } from "react";
import { GetServerSideProps } from "next";
import TaskList from "@/components/TaskList/TaskList";
import TaskBuilder from "@/components/TaskBuilder/TaskBuilder";
import { TaskListInterface } from "@/types";
import { BASE_URLS } from "@/constants";

import styles from "@/styles/Home.module.css";

const Home: FC<TaskListInterface> = ({ taskList }) => {
  return (
    <>
      <main className={styles.main}>
        <TaskBuilder />
        <TaskList taskList={taskList} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(`${BASE_URLS[process.env.NODE_ENV]}/api/get-tasks`);
  const json = await data.json();
  const taskList = JSON.parse(json);

  return {
    props: {
      taskList,
    },
  };
};
