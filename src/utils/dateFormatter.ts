// I've chose not to use any libraries
const formatDate = (uDate: number) => {
  const date = new Date(uDate * 1000);
  const now = new Date();

  interface MonthType {
    [index: number]: string;
  }

  const months: MonthType = {
    0: "янв.",
    1: "фев.",
    2: "мар.",
    3: "апр.",
    4: "мая.",
    5: "июн.",
    6: "июл.",
    7: "авг.",
    8: "сен.",
    9: "окт.",
    10: "ноя.",
    11: "дек.",
  };

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return year === now.getFullYear()
    ? `${day} ${month}`
    : `${day} ${month} ${year}`;
};

export default formatDate;
