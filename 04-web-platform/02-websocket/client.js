const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  addMessage('Connected to server', 'status');
};

ws.onmessage = (event) => {
  addMessage(`Received: ${event.data}`, 'received');
};

ws.onclose = () => {
  addMessage('Disconnected from server', 'status');
};

ws.onerror = (error) => {
  addMessage('Error: ' + error.message, 'status');
};

// Send message on button click
sendButton.addEventListener('click', sendMessage);

// Send message on Enter key
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message && ws.readyState === WebSocket.OPEN) {
    ws.send(message);
    addMessage(`Sent: ${message}`, 'sent');
    messageInput.value = '';
  }
}

function addMessage(text, className) {
  const messageEl = document.createElement('div');
  messageEl.className = `message ${className}`;
  messageEl.textContent = text;
  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
