import React from "react";
import TaskItem from "./TaskItem";
import { ITaskCard } from "../../../types";
import { useAppSelector } from "../../../hooks";
import { State } from "../../../state/reducer";

const Tasks = () => {
  const selectByFilters = (state: State) => {
    const { tasks, titleFilter, dateRange } = state;

    // Title filter
    const tasksByTitle =
      titleFilter.length > 0
        ? tasks.filter((task) =>
            task.title.toLowerCase().startsWith(titleFilter.toLowerCase())
          )
        : tasks;

    // Then date filter
    let resultTasks;
    if (dateRange[0] !== null && dateRange[1] !== null) {
      const startTimestamp = dateRange[0].getTime() / 1000;
      const endTimestamp = dateRange[1].getTime() / 1000;
      resultTasks = tasksByTitle.filter(
        (task) => task.dateEnd >= startTimestamp && task.dateEnd <= endTimestamp
      );
    } else {
      resultTasks = tasksByTitle;
    }

    return resultTasks;
  };

  const tasks: ITaskCard[] = useAppSelector(selectByFilters);

  const today = Date.now() / 1000;
  const outdatedTasksCount: number = tasks.filter(
    (task) => task.dateEnd < today
  ).length;
  const newCount: number = tasks.filter(
    (task) => task.created < today && task.created > today - 259200
  ).length; // created in last 3 days

  return (
    <section className="tasks">
      <div className="tasks__header">
        <div className={"header__title"}>
          <h2>
            Поручения <span className="title-anno">(ручные)</span>
          </h2>
        </div>
        <div className={"header__status-new"}>Новых: {newCount}</div>
        <div className={"header__status-outdated"}>
          Просрочено: {outdatedTasksCount}
        </div>
      </div>

      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
