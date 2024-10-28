const stackContainer = document.getElementById('stackContainer');

function push() {
    const value = document.getElementById('stackInput').value;
    if (value) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = value;
        stackContainer.appendChild(item);
        document.getElementById('stackInput').value = '';
    }
}

function pop() {
    if (stackContainer.lastChild) {
        stackContainer.removeChild(stackContainer.lastChild);
    }
}
