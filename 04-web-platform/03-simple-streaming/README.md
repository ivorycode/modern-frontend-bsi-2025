# Simple Streaming Server

A Node.js server demonstrating HTTP streaming responses.

## Starting the Server

```bash
npm start
```

The server will start on port 3070 at http://localhost:3070/

## Endpoints

- `/` - HTML streaming demo
- `/api` - JSON streaming API endpoint

## Testing with curl

Fetch the streaming API endpoint:

```bash
curl http://localhost:3070/api
```

This will stream JSON data chunks every second for 10 seconds.
