import { Check } from "lucide-react";

type TaskEmptyStateProps = {
  hasTasks: boolean;
};

export const TaskEmptyState = ({ hasTasks }: TaskEmptyStateProps) => {
  const description = hasTasks ? "Try another filter to see your tasks." : "Add your first task above";

  const heading = hasTasks ? "No tasks here" : "Your list starts here";

  return (
    <div className="flex min-h-60 flex-col items-center justify-center px-6 py-10 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f6f2] text-[#6c9b82]">
        <Check strokeWidth={1.8} className="h-6 w-6" />
      </span>

      <h2 className="text-base font-semibold text-[#304C3E]">{heading}</h2>

      <p className="mt-2 text-sm text-[#7A8881]">{description}</p>
    </div>
  );
};
