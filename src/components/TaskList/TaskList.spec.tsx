import { render } from "@testing-library/react";

import TaskList from "./TaskList";

const mockTaskList = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "The first task",
    },
    {
      id: 2,
      title: "Task 2",
      description: "The second task",
    },
  ],
};

describe("Task List", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<TaskList taskList={mockTaskList} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
