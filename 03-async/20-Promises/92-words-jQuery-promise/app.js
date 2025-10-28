$.get('http://localhost:3456/word/0')
    .then(function (data) {
        document.getElementById('content').textContent = data;
    });
