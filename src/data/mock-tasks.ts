import {
  getRandomId,
  getRandomEl,
  getRandomNum,
  getRandomInArr,
} from "../utils/randomizer";
import { ITaskCard } from "../types";

const generateMockData = (): ITaskCard[] => {
  const result = [];
  const taskCount = 6;

  for (let i = 0; i < taskCount; i += 1) {
    const newTags: string[] = getRandomInArr([
      "Совещание отдела",
      "Встреча с руководством",
      "Общее собрание",
    ]);

    const singleTask: ITaskCard = {
      creator: getRandomEl([
        "Маринин",
        "Зарембо-Годзяцкий",
        "Константинопольский",
      ]),
      created: getRandomEl([1626591600, 1625043600, 1591866000]),
      dateEnd: getRandomEl([1626426000, 1625043600, 1626940800, 1629446400]),
      dateStart: getRandomEl([1626426000, 1625043600, 1591866000]),
      id: getRandomId(),
      performers: getRandomEl([
        "Маринин",
        "Зарембо-Годзяцкий",
        "Константинопольский",
      ]),
      subTaskCount: [getRandomNum(), getRandomNum(), getRandomNum()],
      tags: newTags,
      title: getRandomEl([
        "Оценка инвестиционной привлекательности проекта застройки",
        "Исследование ситуации на рынке",
        "Подготовка отчета по объектам недвижимости",
      ]),
      type: getRandomEl(["Поручение", "Задача", "Приказ"]),
    };

    result.push(singleTask);
  }

  return result;
};

const provideTasks = (): Promise<ITaskCard[]> =>
  Promise.resolve(generateMockData());

export default provideTasks;
