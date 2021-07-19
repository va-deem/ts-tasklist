const getRandomId = (): number => {
  const min = 10000000;
  const max = 99000000;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomEl = <T>(list: T[]): T =>
  list[Math.floor(Math.random() * list.length)];

const getRandomNum = (): number => Math.floor(Math.random() * 10);

const getRandomInArr = (list: string[] | undefined): string[] => {
  if (list !== undefined) {
    const n = Math.floor(Math.random() * 3);
    return list
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((a) => a.x)
      .slice(0, n);
  } else {
    return [""];
  }
};

export { getRandomId, getRandomEl, getRandomNum, getRandomInArr };
