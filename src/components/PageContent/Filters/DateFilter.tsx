import React, { useState } from "react";
import { getRandomId } from "../../../utils/randomizer";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../../../hooks";
import { filterDates } from "../../../state/reducer";

interface Props {
  title: string;
  placeholder?: string;
}

const DateFilter = ({ title }: Props) => {
  const id = getRandomId().toString();
  const dispatch = useAppDispatch();

  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="filters__date">
      <label htmlFor={id}>{title}</label>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update: (Date | null)[]) => {
          setDateRange(update);
          dispatch(filterDates(update));
        }}
        isClearable={true}
        locale={ru}
        placeholderText="Выбрать от - Выбрать до"
        className="datepicker-input"
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};

export default DateFilter;
