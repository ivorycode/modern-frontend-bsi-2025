const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Stream HTML content in chunks
    res.write('<!DOCTYPE html><html><head><title>Streaming HTML</title></head><body>');
    res.write('<h1>Streaming HTML Content</h1>');
    res.write(`<span style="display: none">${"&nbsp".repeat(1024)}</span>`);

    const interval = setInterval(() => {
        res.write('<p>Streaming data...</p>');
        res.write(`<span style="display: none">${"&nbsp".repeat(1024)}</span>`);
    }, 1000);

    // End the response after 10 seconds
    setTimeout(() => {
        clearInterval(interval);
        res.write('<p>End of stream.</p>');
        res.end('</body></html>');
    }, 10000)
});

const PORT = 3070;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} - http://localhost:${PORT}/`);
});