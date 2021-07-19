import React, { useState } from "react";
import cn from "classnames";
import filterArrow from "../../../assets/images/filter-arrow.svg";

interface Props {
  title: string;
  subtitle?: string;
  filters: string[];
}

const TagsFilter = ({ title, subtitle, filters }: Props) => {
  const [isClosed, setClose] = useState(false);
  const toggleFilter = (): void => {
    if (isClosed) {
      setClose(false);
    } else {
      setClose(true);
    }
  };

  return (
    <div className={cn("filters__group", { close: isClosed })}>
      <div className="filters__group_header">
        <h2>{title}</h2>
        <img
          src={filterArrow}
          className="toggleIcon"
          alt=""
          onClick={toggleFilter}
        />
      </div>
      {subtitle && <p className="group_subtitle">{subtitle}</p>}
      <ul className="filters__group_list">
        {filters.map((el) => (
          <li
            className={cn("group_list_item", {
              active: el === "Типу" || el === "Завершенные",
            })}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsFilter;
