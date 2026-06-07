import { circularHeist } from "./CircularHeist";

const MAISONS = [[5], [2, 3], [2, 7, 9], [1, 2, 3, 1], [2, 7, 9, 3, 1]];

for (const maison of MAISONS) {
  console.log(
    `Maisons: [${maison.join(", ")}] => Gain maximal: ${circularHeist(maison)}`,
  );
}
