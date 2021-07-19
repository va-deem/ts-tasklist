import React, { useState } from "react";
import cn from "classnames";
import { ITaskCard } from "../../../types";
import formatDate from "../../../utils/dateFormatter";

import tasklist from "../../../assets/images/tasklist.svg";
import sub1 from "../../../assets/images/sub1.svg";
import sub2 from "../../../assets/images/sub2.svg";
import sub3 from "../../../assets/images/sub3.svg";

import { getRandomEl } from "../../../utils/randomizer";

type TaskItemProps = {
  task: ITaskCard;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const [isOpened, setOpen] = useState(false);

  const toggleFooter = (): void => {
    if (isOpened) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const today: number = Date.now();
  const outdatedClass = cn({ outdated: task.dateEnd < today / 1000 });
  const coloredClass = getRandomEl([
    "green",
    "blue",
    "pink",
    "azure",
    "yellow",
  ]);

  return (
    <li
      className={cn("tasklist__item", { open: isOpened })}
      onClick={toggleFooter}
    >
      <div className="item__content">
        <div className="item__header">
          ID {task.id} • {task.type}
          {task.tags &&
            task.tags.map((tag) => (
              <span key={tag} className={cn("header-tag", coloredClass)}>
                {tag}
              </span>
            ))}
        </div>
        <div className="item__description">
          <div>{task.title}</div>
          <div>
            {formatDate(task.dateStart)} -{" "}
            <span className={outdatedClass}>{formatDate(task.dateEnd)}</span>
          </div>
          <div className="priority">9</div>
        </div>
        <div className="item__staff">
          <div className="tasklist__item__author">
            <div className="avatar">ПН</div>
            {task.creator} -<span className="subitle">&nbsp;Aвтор</span>
          </div>
          <div className="tasklist__item__performer">
            <div className="avatar">ПН</div>
            {task.performers} -
            <span className="subitle">&nbsp;Исполнитель</span>
          </div>
          <div className="tasklist__item__status">В работе</div>
        </div>
      </div>
      <div className="item__footer">
        <img src={tasklist} /> <span className="footer-anno">Задачи:</span>
        <img src={sub1} alt="" />
        {task.subTaskCount[0]}
        <img src={sub2} alt="" />
        {task.subTaskCount[1]}
        <img src={sub3} alt="" />
        {task.subTaskCount[2]}
      </div>
    </li>
  );
};

export default TaskItem;
