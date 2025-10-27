async function testJSON() {
    const name = document.getElementById('jsonName').value;
    const email = document.getElementById('jsonEmail').value;

    try {
        const response = await fetch('http://localhost:3000/api/json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        const data = await response.json();
        document.getElementById('jsonResult').textContent =
            'Response: ' + JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('jsonResult').textContent = 'Error: ' + error.message;
    }
}

async function testForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch('http://localhost:3000/api/form', {
            method: 'POST',
            body: formData  // Send native FormData (multipart/form-data)
        });
        const data = await response.json();
        document.getElementById('formResult').textContent =
            'Response: ' + JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('formResult').textContent = 'Error: ' + error.message;
    }
}
