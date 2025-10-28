import { BASE_URL } from "../config.js";

const data = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
console.log(`Word Controller: To get the first word, go to ${BASE_URL}/word/0`);

export async function getWord(req, res) {
  const index = req.params.index;

  setTimeout(function () {
    res.status(200).send(data[index]);
  }, Math.random() * 3000);
}
