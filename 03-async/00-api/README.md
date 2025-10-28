The directory `_server` contains a simple implementation of an API with two endpoints.

You can start the server with the following commands:

	npm install 
	npm start
*Note:* `npm install` installs the dependencies. You have to run that only once.

The server can be stopped with `Ctrl-C`.

When the server is started there are two endpoints:

- Fetch a series of words:
  - GET http://localhost:3456/word/XX
  - `XX` is a number between 0 and 8
  - The sends the response with a random delay.
- Guess a number: The server chooses a number between 0 and 100 at startup.
  - POST http://localhost:3456/numberguess -> send your guess
  - GET http://localhost:3456/numberguess
    - The server tells you if your last guess was right, above or below.