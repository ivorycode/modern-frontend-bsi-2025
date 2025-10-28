import express from "express";
import { getWord } from "./controllers/wordController.js";
import {
  getStatus,
  guessNumber,
  reset,
} from "./controllers/numberGuessController.js";

const router = express.Router();
router.get("/word/:index", getWord);

router.get("/numberguess", getStatus);
router.post("/numberguess", guessNumber);
router.post("/numberguess/reset", reset);

export { router };
