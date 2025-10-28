import express from "express";
import morgan from "morgan";
import { PORT, BASE_URL } from "./config.js";
import { router } from "./routes.js";
import { getNumber } from "./controllers/numberGuessController.js";

const app = express();

//app.use(express.static(__dirname));
app.listen(PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined")); // configure default log output

console.log(`Server running at ${BASE_URL}`);

app.use((req, res, next) => {
  // Note: a better alternative would be to use the official `cors` package ...
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.get("/", (req, res) => {
  res.status(200).send(`
        Server is running! 
        <br><br> 
        To get the first word, go to: <a href="http://localhost:3456/word/0">http://localhost:3456/word/0</a>
        <br><br>
        The number to guess is: ${getNumber()}
        <br>
        Make a guess: POST <a href="http://localhost:3456/numberguess">http://localhost:3456/numberguess</a>
        <br>
        Check if you guessed right: GET <a href="http://localhost:3456/numberguess">http://localhost:3456/numberguess</a>
        
    `);
});

app.use("/", router);
