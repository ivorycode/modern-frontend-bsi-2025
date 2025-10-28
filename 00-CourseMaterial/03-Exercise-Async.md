## Preparation: API Endpoint

Run the server providing the API endpoints for the exercises.

In the directory `06-Async/00-api`:

```
npm install 
npm start
```

*Note:* `npm install` installs the dependencies. You have to run that only once.

The server can be stopped with `Ctrl-C`.

##### Word-API

This server provides a HTTP-based API from which you can get 9 words that make up a complete sentence. You can get the first word from the following URL:

```
http://localhost:3456/word/0
```

The last parameter can be varied between 0 and 8.

You can use an API client like Postman (https://www.getpostman.com/) to play with the API or you can use the built-in http client of IntelliJ or WebStorm.



## Exercise: AJAX with Callbacks

#### 1.1 Word API Client

Inspect the example `06-Async/10-Callbacks/91-Words-jQuery-callbacks`.

Open the web-page `index.html`. The logic in the script loads the first word from the server and renders it on the page.

Extend the example, so that all the words of the sentence are loaded from the server, and the complete sentence is rendered on the page.

Try two approaches for your implementation:

- All words are immediately queried from the server. The complete sentence should be rendered on the page once all the words have been loaded.

- Query one word after the other from the server. The next word should only be queried when the previous word has been received (observe the waterfall pattern in the network inspector of the developer tools). Each word should be rendered on the page as soon as it has been received from the server.

Use jQuery with callbacks to implement the logic.





## Exercise: AJAX with Promises
#### 1 Word API Client

Inspect the example `06-Async/20-Promises/91-Words-promise`.

Important: Do not use Internet Explorer to run this example since it does not implement native promises!

Inspect the web-page `index.html`. The logic in the script loads the first word from the server and renders it on the page.

Extend the example, so that all the words of the sentence are loaded from the server, and the complete sentence is rendered on the page.

Try two approaches for your implementation:

- All words are immediately queried from the server. The complete sentence should be rendered on the page once all the words have been loaded.

- Query one word after the other from the server. The next word should only be queried when the previous word has been received (observe the waterfall pattern in the network inspector of the developer tools). Each word should be rendered on the page as soon as it has been received from the server.

Use axios and Promises to implement the logic.

#### 2 Word API Client - Async/Await

Rewrite the solution from exercise 1 using `async` and `await`.






## Exercise: AJAX with RxJS

####  Word API Client

Inspect the example `06-Async/30-Observables/92-Words-exercise`.

Inspect the script in `index.html`. The logic in the script loads the first word from the server and renders it on the page.

Implement the "waterfall" scenario: All words should be loaded one after the other from the server. The next word should only be queried when the previous word has been received.

Use RxJS for the implementation.





