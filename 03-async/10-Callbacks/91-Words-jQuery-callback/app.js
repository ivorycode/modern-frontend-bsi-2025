
$.get('http://localhost:3456/word/0', (data) => {
    document.getElementById('content').textContent = data;
});

