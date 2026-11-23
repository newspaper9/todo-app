export type FilterType = "All" | "Active" | "Completed";

export type Task = {
  title: string;
  completed: boolean;
  id: string;
};
