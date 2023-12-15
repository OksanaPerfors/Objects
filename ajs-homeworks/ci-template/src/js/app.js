const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

// {key: 'name', value: 'мечник'}
// const name = 'name'
// const swordman = 'мечник'

// const object = {key: name, name: swordman}

// for (const key in obj) {
//   console.log(`По ключу ${key} получено значение ${obj[key]}`);
// }

function orderByProps(obj, orders) {
  const importantObjects = [];
  const objects = [];

  for (const key in obj) {
    const value = obj[key];
    const transformedObject = { key: key, value: value };

    if (orders.includes(key)) {
      importantObjects.push(transformedObject);
    } else {
      objects.push(transformedObject);
    }
  }

  objects.sort((a, b) => a.key.localeCompare(b.key));
  importantObjects.sort((a, b) => {
    const aKey = a.key;
    const bKey = b.key;

    const aIndex = orders.indexOf(aKey);
    const bIndex = orders.indexOf(bKey);

    if (aIndex < bIndex) {
      return -1;
    }

    if (aIndex > bIndex) {
      return 1;
    }

    return 0;
  });

  return [...importantObjects, ...objects];
}

console.log(orderByProps(obj, ["name", "level"]));

const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
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
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

function getObjeckt(arr) {
  const newSpecialArr = [];
  arr.map((item) => {
    const newObj = {
      id: item.id,
      name: item.name,
      icon: item.icon,
      description: item.description ? item.description : "Описание недоступно",
    };
    newSpecialArr.push(newObj);
  });
  return newSpecialArr;
}

console.log(getObjeckt(character.special));
