// fetch is a modern promise-based API to perform network requests
// Make sure to run the example in a modern firefox/chrome: http://caniuse.com/#search=fetch

var content = document.getElementById('content');

fetch('http://httpbin.org/get?time=' + new Date().getTime())
    .then(parseResponse)
    .then(updateTime)
    .then(success)
    .catch(failure)
    .then(epilogue);

function parseResponse(response) {
    return response.json();
}

function updateTime(data) {
    var time = data.args.time;
    var timeDiv = document.createElement('div');
    timeDiv.textContent = time;
    content.appendChild(timeDiv);

    /* choose one of the following */
    // return time;
    // return Promise.resolve(time);
    // return Promise.reject(time);
    // throw time;
}

function success(data) {
    var timeDiv = document.createElement('div');
    timeDiv.textContent = (data ? data : '') + ' -> Success!';
    content.appendChild(timeDiv);
}

function failure(data) {
    var timeDiv = document.createElement('div');
    timeDiv.textContent = (data ? data : '') + ' -> Failure!';
    content.appendChild(timeDiv);
}

function epilogue() {
    var timeDiv = document.createElement('div');
    timeDiv.textContent = 'Epilogue ...';
    content.appendChild(timeDiv);
}


function fetchWithError(){
    return new Promise(() =>
        setTimeout(() => {throw 'Got you!!!'; }, 1000)
    );
};
