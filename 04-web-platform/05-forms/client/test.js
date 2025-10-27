// Validation helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateFields(name, email) {
    if (!name || name.trim() === '') {
        return 'Name is required';
    }
    if (!email || email.trim() === '') {
        return 'Email is required';
    }
    if (!isValidEmail(email)) {
        return 'Please enter a valid email address';
    }
    return null;
}

async function testJSON() {
    const name = document.getElementById('jsonName').value;
    const email = document.getElementById('jsonEmail').value;

    // Validate before sending
    const validationError = validateFields(name, email);
    if (validationError) {
        document.getElementById('jsonResult').textContent = 'Validation Error: ' + validationError;
        return;
    }

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

    // Extract form values for validation
    const name = formData.get('name');
    const email = formData.get('email');

    // Validate before sending
    const validationError = validateFields(name, email);
    if (validationError) {
        document.getElementById('formResult').textContent = 'Validation Error: ' + validationError;
        return;
    }

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

// Add event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const jsonButton = document.getElementById('jsonButton');
    const form = document.getElementById('testForm');

    jsonButton.addEventListener('click', testJSON);
    form.addEventListener('submit', testForm);
});
