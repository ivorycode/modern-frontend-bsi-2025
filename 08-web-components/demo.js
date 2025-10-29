// Demo controls
const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal'];

function updateName() {
    const card = document.getElementById('dynamic-card');
    const randomName = names[Math.floor(Math.random() * names.length)];
    card.setAttribute('name', randomName);
}

function updateColor() {
    const card = document.getElementById('dynamic-card');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.setAttribute('color', randomColor);
}
