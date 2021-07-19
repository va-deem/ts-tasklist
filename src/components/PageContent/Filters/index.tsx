import React from "react";
import TagsFilter from "./TagsFilter";
import SelectFilter from "./SelectFilter";
import TextFilter from "./TextFilter";
import DateFilter from "./DateFilter";

const Filters = () => {
  const testoptions = ["Опция 1", "Опция 2"];

  return (
    <div className={"filters"}>
      <TagsFilter
        title="Группировка по"
        filters={["Типу", "С кем работаем", "Автору", "Объекту отклонения"]}
      />
      <TagsFilter
        title="Фильтр"
        subtitle="По статусу"
        filters={[
          "Все",
          "Только активные",
          "Не начатые",
          "В работе",
          "Завершенные",
        ]}
      />
      <SelectFilter
        title="Как завершена задача"
        placeholder="Любым образом"
        options={testoptions}
      />
      <DateFilter title="По сроку" placeholder="Выбрать от - Выбрать до" />
      <SelectFilter
        title="Тип задачи"
        placeholder="Выберите тип задачи"
        options={testoptions}
      />
      <TextFilter
        title="По описанию / причине"
        placeholder="Введите часть описания"
      />
      <TextFilter
        title="По описанию / причине"
        placeholder="Введите часть описания"
      />
    </div>
  );
};

export default Filters;
