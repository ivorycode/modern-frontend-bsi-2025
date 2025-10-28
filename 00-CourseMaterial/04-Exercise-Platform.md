## Exercise fetch

Start in the playground `99-playground/browser-plain`. Run `npm install` and `npm start`. Then go to `http://localhost:3000/`.

Add the following snippet to the `app.js`

```js
const WEB_URL = "https://jsonplaceholder.typicode.com/albums";

fetch(WEB_URL)
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
        document.body.innerHTML = `
            <div>
                <pre>${data}</pre>
            </div>
        `;
    });

Copy
```

- What is the difference between `response.text()` and `response.json()`?
- Change the `WEB_URL` to a populer website i.e. `https://www.20min.ch/`. What would you expect?
  - In the browser developer tools: Inspect the headers of the http response from jsonplaceholder, to find the reason why it works there ...





## Exercise WebSockets

Start in the app in `04-web-platform/02-websocket`. Run `npm install` and `npm start`. Then go to `http://localhost:8080/`.

Extend the application with a "broadcast functionality": The "Server echo" message should be sent to all connected clients. Test the application by connecting several browser windows to `http://localhost:8080/`.





## Streaming

Start the app in `04-web-platform/03-streaming`. Run `npm install` and `npm start`. Then go to `http://localhost:3070/`and `http://localhost:3070/app`

Also execute: `curl http://localhost:3070/app` and inspect the response.

Inspect the code in `server.js` and `app-script.js`.
Extend the behavior on `http://localhost:3070/app`:

- The server should send several messages.
- The client should just display the `message`-Text and the `timestamp` in the UI.



## JSON

Start in the direcotry  `04-web-platform/04-json`. Run the test:

```
npm install
npm run test
```

Experiment with adding other properties to the object:

- `age: 30n,`
- `birthday: new Date('1990-01-01'),`
- `hobbies = new Set('reading', 'coding', 'gaming')`

Think about how to serialize / deserialize objet in this case ...
Also have a look at: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_reviver_when_paired_with_the_replacer_of_json.stringify



### Forms

Start in the direcotry  `04-web-platform/04-json`. Run the server:

```
npm install
npm run dev
```



Submit some data to the API endpoints:

```
curl -X POST http://localhost:3000/api/json \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```

```
curl -X POST http://localhost:3000/api/form \
  -F "name=John" \
  -F "email=john@example.com"
```



Open the frontend in the browser: `http://localhost:3000/test.html`

Inspect the client-side validation in `test.js`.
Add corresponding server side validation.
Consider using `Zod` to make the server-side type safe (`submittedData` should be typed).