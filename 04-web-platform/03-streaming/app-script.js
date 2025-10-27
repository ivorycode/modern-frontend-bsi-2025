const fetchBtn = document.getElementById('fetchBtn');
const contentDiv = document.getElementById('content');
const statusDiv = document.getElementById('status');

fetchBtn.addEventListener('click', fetchStream);

async function fetchStream() {
    // Clear previous content
    contentDiv.innerHTML = '';
    statusDiv.innerHTML = '<div class="status active">Streaming in progress...</div>';
    fetchBtn.disabled = true;

    try {
        const response = await fetch('/api');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                console.log('Stream completed');
                statusDiv.innerHTML = '<div class="status complete">Stream completed!</div>';
                fetchBtn.disabled = false;
                break;
            }

            // Decode the chunk
            const chunk = decoder.decode(value, { stream: true });

            // Process each line (JSON object)
            const lines = chunk.split('\n').filter(line => line.trim());

            for (const line of lines) {
                try {
                    // const data = JSON.parse(line);
                    const data = line;
                    displayMessage(data);
                } catch (error) {
                    console.error('Failed to parse JSON:', error, 'Line:', line);
                }
            }
        }
    } catch (error) {
        console.error('Error fetching stream:', error);
        statusDiv.innerHTML = `<div class="status" style="background-color: #f8d7da; color: #721c24;">Error: ${error.message}</div>`;
        fetchBtn.disabled = false;
    }
}

function displayMessage(data) {
    const itemEl = document.createElement('div');
    itemEl.className = 'stream-item';
    itemEl.innerHTML = `
        <div class="message-text">${data}</div>
<!--        <div class="timestamp">${new Date(data.timestamp).toLocaleString()}</div>-->
    `;
    contentDiv.appendChild(itemEl);

    // Auto-scroll to bottom
    contentDiv.scrollTop = contentDiv.scrollHeight;
}
