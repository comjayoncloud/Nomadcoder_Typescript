type Player<E> = {
  name: string;
  extraInfo: E;
};
type JaewooExtra = {
  favfood: string;
};
type JaewooPlayer = Player<JaewooExtra>;

const jaewoo: JaewooPlayer = {
  name: "jaewoo",
  extraInfo: {
    favfood: "meat",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
