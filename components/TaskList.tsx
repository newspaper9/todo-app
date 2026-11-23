import { Task } from "@/types";
import { TaskEmptyState } from "./TaskEmptyState";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  hasTasks: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  tasks: Task[];
};

export const TaskList = ({ hasTasks, onDelete, onToggle, tasks }: TaskListProps) => {
  if (!tasks.length) {
    return <TaskEmptyState hasTasks={hasTasks} />;
  }

  return (
    <ul className="divide-y divide-[#edf1ee] py-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} onDelete={onDelete} onToggle={onToggle} task={task} />
      ))}
    </ul>
  );
};
