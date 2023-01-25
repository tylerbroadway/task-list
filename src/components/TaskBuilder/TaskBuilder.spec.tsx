import { render } from "@testing-library/react";

import TaskBuilder from "./TaskBuilder";

describe("Task Builder", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<TaskBuilder />);

    expect(asFragment()).toMatchSnapshot();
  });
});
