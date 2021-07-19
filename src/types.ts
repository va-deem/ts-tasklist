export interface ITaskCard {
  creator: string;
  created: number;
  dateEnd: number;
  dateStart: number;
  id: number;
  // performers: title;
  performers: string;
  subTaskCount: [number, number, number];
  tags?: Array<string>;
  title: string;
  type: string;
}
