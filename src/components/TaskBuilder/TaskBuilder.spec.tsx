import { render } from "@testing-library/react";

import TaskBuilder from "./TaskBuilder";

describe("Task Builder", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<TaskBuilder />);

    expect(asFragment()).toMatchSnapshot();
  });
});
