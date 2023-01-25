export const BASE_URLS: Record<string, string> = {
  development: "http://localhost:3000",
  production: "https://task-list-tb.vercel.app",
};

// Get the absolute path of tasks.json
export const DB_PATH = `${process.cwd()}/data/tasks.json`;
