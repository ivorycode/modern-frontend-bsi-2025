onmessage = function (ev) {

    console.log("Worker: Message received from main script");
    setTimeout(() => postMessage('Pong!'), 1000);
}