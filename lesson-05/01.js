/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов
 к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

// const game = {
//   resources: {
//     // gold: 250,
//     lumber: 100,
//     gold: 250,
//   },
//   addResource(resource, amount) {
//     if (resource in this.resources) {
//       for (key in this.resources) {
//         if (resource === key) {
//           // console.log("valid resource");
//           return (this.resources[key] += amount);
//           // console.log(`${key}` + " : " + `${this.resources[key]}`);
//         }
//         // if (resource !== key) {
//         //   console.log("Invalid resource");
//         // }
//         // else if()
//       }
//     } else {
//       return console.log("Invalid resource");
//     }
//   },
// };

// const game = {
//   resources: {
//     gold: 250,
//     lumber: 100,
//   },
//   addResource(resource, amount) {
//     // console.log(Object.keys(this.resources));
//     for (key in Object.keys(this.resources))
//   },
// };

// addResource(resource, amount) {
//   if (resource in game.resources) {
//     game.resources[resource] += amount;
//   } else {
//     console.log("Invalid resource");
//   }
// },
// game.addResource("gold", 100);

// console.log(game.addResource("gold", 100));
// game.addResource("gold", 100);
