// import { FilterType, Task } from "@/types";

// type TaskFiltersProps = {
//   filter: FilterType;
//   onFilter: (filter: FilterType) => void;
//   tasks: Task[];
// };

// const filters: FilterType[] = ["All", "Active", "Completed"];

// export const TaskFilters = ({ filter, onFilter, tasks }: TaskFiltersProps) => {
//   const handleClick = (filterValue: FilterType) => () => {
//     onFilter(filterValue);
//   };

//   return (
//     <div className="flex items-center justify-between pt-3 gap-2 border-b border-[#e9eeeb] px-6 sm:px-8">
//       <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] ml-auto font-medium flex justify-end text-[#65766c] order-2">{tasks.length}</span>

//       <div className="flex gap-5 sm:gap-7 font-semibold order-1">
//         {filters.map((item: FilterType) => (
//           <button
//             id={item}
//             key={item}
//             onClick={handleClick(item)}
//             className={`cursor-pointer relative h-12 text-xs font-semibold transition sm:text-sm
//               text-[#7b8680] hover:text-[#236b53]
//               border-b-2 ${filter === item ? "border-b-[#236b53] text-[#236b53]" : "border-b-transparent"}`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

import { FilterType, Task } from "@/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFilterProps = {
  filter: FilterType;
  onFilter: (filter: FilterType) => void;
  tasks: Task[];
};

export const TaskFilters = ({ filter, onFilter, tasks }: TaskFilterProps) => {
  return (
    <div className="w-[672px] h-[48px] border-b border-b-[#E9EEEB] text-[#7B8680] text-[14px] font-semibold flex">
      {filters.map((item) => (
        <button id={item} key={item} onClick={() => onFilter(item)} className={`h-full flex items-center ml-8 border-b-2 ${filter === item ? "border-b-[#236B53] text-[#236B53]" : "border-b-transparent"}`}>
          {item}
        </button>
      ))}
      <div className="w-[16px] h-[25px] rounded-[6px] bg-[#F0F4F1] self-center flex items-center justify-center ml-auto mr-8 text-[#65766C] text-[11px] font-normal">{tasks.length}</div>
    </div>
  );
};
