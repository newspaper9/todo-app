// import { ChangeEvent, SubmitEvent, useState } from "react";
// import { CornerDownLeft, Plus } from "lucide-react";

// type TaskFormProps = {
//   onCreateTask: (title: string) => void;
// };

// export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
//   const [taskTitle, setTaskTitle] = useState("");

//   const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onCreateTask(taskTitle);
//     setTaskTitle("");
//   };

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setTaskTitle(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-2">
//         <button type="submit" className={`flex h-12 cursor-pointer items-center gap-2 rounded-xl px-4 font-semibold whitespace-nowrap transition-all duration-300 ease-out order-2 ${taskTitle.trim() ? "scale-105 bg-[#386b55] text-white hover:scale-110 hover:bg-[#2e5845]" : "bg-[#D8E5DD] text-[#63796C] hover:bg-[#cbdcd1]"}`}>
//           <Plus className="h-4 w-4" />
//           Add <span className="hidden sm:inline">task</span>
//         </button>

//         <input id="new-task" placeholder="What needs to get done?" required maxLength={160} value={taskTitle} onChange={handleChange} className="h-12 flex-1 rounded-xl bg-transparent px-3 text-base text-[#63796C] placeholder:text-[#75867E] outline-none transition hover:bg-white focus:bg-white order-1" />

//         <label htmlFor="new-task" className="sr-only">
//           Task name
//         </label>
//       </form>

//       <div className="mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881]">
//         <div className="font-regular order-2">Enter to add a task</div>
//         <div className="order-1">
//           <CornerDownLeft size={11} />
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";

// interface TaskFormProps {
//   onAddTask: (text: string) => void;
// }

// export function TaskForm({ onAddTask }: TaskFormProps) {
//   const [value, setValue] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const trimmed = value.trim();
//     if (!trimmed) return;
//     onAddTask(trimmed);
//     setValue("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="mx-6 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-2 sm:mx-8">
//         <label htmlFor="new-task" className="sr-only">
//           Task name
//         </label>
//         <div className="flex items-center gap-2">
//           <input id="new-task" type="text" required maxLength={160} value={value} onChange={(e) => setValue(e.target.value)} placeholder="What needs to get done?" className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3.5 text-sm text-[#213d35] placeholder:text-[#75867e] focus:bg-white focus:shadow-none focus:outline-none sm:px-4 sm:text-base" />
//           <button type="submit" disabled={value.trim().length === 0} className="flex min-h-12 shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-[#236b53] px-4 text-sm font-semibold text-white transition hover:bg-[#18523e] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#d8e5dd] disabled:text-[#63796c] sm:px-5">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
//               <path d="M5 12h14" />
//               <path d="M12 5v14" />
//             </svg>
//             Add<span className="hidden sm:inline">task</span>
//           </button>
//         </div>
//       </form>

//       <p className="mx-7 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-9">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
//           <path d="M20 4v7a4 4 0 0 1-4 4H4" />
//           <path d="m9 10-5 5 5 5" />
//         </svg>
//         Enter to add a task
//       </p>
//     </>
//   );
// }

import { ChangeEvent, useState } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (!taskTitle.trim()) return;

    onCreateTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form
      className="w-full px-4 sm:px-8"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="w-full h-[74px] rounded-[16px] bg-[#F4F8F5] border border-[#DCE9E2] mt-6 flex items-center gap-2 p-2">
        <input value={taskTitle} onChange={handleChange} type="text" placeholder="Plan this week’s projects" className="flex-1 min-w-0 h-[56px] bg-white rounded-[12px] p-3 sm:p-4 placeholder:text-[#213D35]" />

        <button type="submit" className="shrink-0 bg-[#236B53] w-[105px] sm:w-[128px] h-[48px] rounded-[12px] text-white text-[12px] sm:text-[14px] font-semibold flex gap-2 items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33325V12.6666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
            <path d="M3.33203 8H12.6654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
          </svg>
          Add task
        </button>
      </div>

      <div className="w-full h-[57px] flex justify-end items-start">
        <div className="text-[11px] text-[#7A8881] font-normal flex items-center justify-center mt-3 mr-2 sm:mr-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2V5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#7A8881" />
            <path d="M4.5 5L2 7.5L4.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#7A8881" />
          </svg>
          Enter to add a task
        </div>
      </div>
    </form>
  );
};
