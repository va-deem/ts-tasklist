export interface ITaskCard {
  creator: string; // автор
  created: number; // дата создания
  dateEnd: number; // дата завершения
  dateStart: number; //дата начала
  id: number;
  // performers: title; // исполнитель
  performers: string;
  subTaskCount: [number, number, number]; // количество подзадач
  tags?: Array<string>; // Теги задачи
  title: string; // название задачи
  type: string; // вид задачи
}
