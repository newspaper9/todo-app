import { ListTodo } from "lucide-react";

export const TaskHeader = () => {
  return (
    <div>
      <header className="flex items-center gap-3 px-6 pb-6 pt-7 sm:px-8 sm:pt-8">
        <h1 className="text-2xl font-bold text-[#23735A] order-2">My tasks.</h1>

        <div className="size-11 bg-[#E5F2ED] rounded-2xl flex items-center justify-center text-[#23735A] order-1">
          <ListTodo />
        </div>
      </header>
    </div>
  );
};
