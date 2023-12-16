import { character, getObjeckt } from "../app";

test("getObjeckt", () => {
  const result = getObjeckt(character.special);

  expect(result).toEqual([
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ]);
});
