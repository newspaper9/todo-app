"use client";
import { useState } from "react";
import { TaskFilters, TaskForm, TaskHeader, TaskList } from "@/components";
import { FilterType, Task } from "@/types";

const HomePage = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [tasks, setTasks] = useState<Task[]>([]);

  // const visibleTasks = tasks.filter((task) => (filter === "All" || filter === "Active" ? !task.completed : task.completed));
  const visibleTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const toggleTask = (id: string) => {
    setTasks((current) => current.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  return (
    <div className="w-2xl min-h-130 mt-50 bg-white rounded-3xl">
      <TaskHeader />

      <div className="mx-6 sm:mx-8">
        <TaskForm onCreateTask={createTask} />
      </div>

      <TaskFilters filter={filter} onFilter={setFilter} tasks={visibleTasks} />

      <TaskList tasks={visibleTasks} hasTasks={tasks.length > 0} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default HomePage;
