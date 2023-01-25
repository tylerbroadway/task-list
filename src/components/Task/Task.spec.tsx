import { render } from "@testing-library/react";

import Task from "./Task";

const mockTask = {
  id: 1,
  title: "Mock Task",
  description: "This is a test",
};

describe("Task component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Task {...mockTask} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
