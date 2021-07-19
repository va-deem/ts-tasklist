import React from "react";
import { getRandomId } from "../../../utils/randomizer";

interface Props {
  title: string;
  placeholder?: string;
  options: string[];
}

const SelectFilter = ({ title, placeholder, options }: Props) => {
  const id = getRandomId().toString();

  return (
    <div className="filters__select">
      <label htmlFor={id}>{title}</label>
      <select defaultValue="" id={id}>
        <option value="">{placeholder}</option>
        {options.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
