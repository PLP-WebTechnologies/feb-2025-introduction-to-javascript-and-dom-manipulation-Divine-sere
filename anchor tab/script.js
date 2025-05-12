// Change the highlight game title and styles
function changeText() {
    const message = document.getElementById('message');
    message.textContent = 'Featured Game: Cyber Battle 2077';
    message.style.color = '#00ffcc';
    message.style.fontSize = '26px';
}

// Add or remove a featured game box
function toggleBox() {
    const container = document.getElementById('boxContainer');
    const existingBox = document.getElementById('dynamicBox');

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const newBox = document.createElement('div');
        newBox.id = 'dynamicBox';
        newBox.textContent = '🔥 New Release: Ghost Arena — Now Available!';
        container.appendChild(newBox);
    }
}
