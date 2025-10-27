# WebSocket Example

A simple WebSocket example demonstrating real-time bidirectional communication between a browser client and a Node.js server.

## Prerequisites

- Node.js installed on your system

## Installation

Install the dependencies:

```bash
npm install
```

## Running the Project

1. Start the server:

```bash
npm start
```

The server will start on port 8080, running both:
- HTTP server at `http://localhost:8080`
- WebSocket server at `ws://localhost:8080`

2. Open your browser and navigate to:

```
http://localhost:8080
```

## Usage

Once connected, you can:
- Type a message in the input field
- Click "Send" or press Enter to send the message
- The server will echo your message back with a "Server echo:" prefix
- All messages are displayed in the message window with color coding:
  - Blue: messages received from server
  - Green: messages sent to server
  - Gray: status messages (connected/disconnected)

## Project Structure

- `server.js` - WebSocket server using the `ws` package
- `index.html` - HTML page with UI
- `client.js` - WebSocket client code using native browser WebSocket API
- `package.json` - Project dependencies
