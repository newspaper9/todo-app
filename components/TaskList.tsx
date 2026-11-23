// import { FilterType, Task } from "@/types";
// import { TaskEmptyState } from "./TaskEmptyState";
// import { TaskItem } from "./TaskItem";

// type TaskListProps = {
//   hasTasks: boolean;
//   onDelete: (id: string) => void;
//   onToggle: (id: string) => void;
//   tasks: Task[];
// };
// const FILTERS: FilterType[] = ["All", "Active", "Completed"];
// export const TaskList = ({ hasTasks, onDelete, onToggle, tasks }: TaskListProps) => {
//   if (!tasks.length) {
//     return <TaskEmptyState hasTasks={hasTasks} />;
//   }

//   return (
//     <ul className="divide-y divide-[#edf1ee] py-2">
//       {tasks.map((task) => (
//         <TaskItem key={task.id} onDelete={onDelete} onToggle={onToggle} task={task} />
//       ))}
//     </ul>
//   );
// };
import { TaskItem } from "./TaskItem";
import { TaskEmpty } from "./TaskEmptyState";
import { Task } from "@/types";

type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete, onToggle, hasTasks }: TaskListProps) => {
  if (!tasks.length) return <TaskEmpty hasTasks={hasTasks} />;

  return (
    <div className="w-full py-2 px-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};
