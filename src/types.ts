export interface TaskInterface {
  id?: number;
  title: string;
  description: string;
}

export interface TaskListInterface {
  taskList: {
    tasks: TaskInterface[];
  };
}
