import React from "react";
import { getRandomId } from "../../../utils/randomizer";
import { useAppDispatch } from "../../../hooks";
import { filterTitle } from "../../../state/reducer";

interface Props {
  title: string;
  placeholder?: string;
}

const TextFilter = ({ title, placeholder }: Props) => {
  const id = getRandomId().toString();
  const dispatch = useAppDispatch();

  return (
    <div className="filters__text">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={({ target }) => dispatch(filterTitle(target.value))}
      />
    </div>
  );
};

export default TextFilter;
