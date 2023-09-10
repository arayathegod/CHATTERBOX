const socket = io();

let userName;
do {
    userName = prompt("Enter your username: ");
} while (!userName);

socket.emit('join', userName);

let textarea = document.querySelector('#textarea');
let btn = document.querySelector('.btn');
let messageArea = document.querySelector('.message_area');

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    sendMessage(textarea.value);
});

function sendMessage(message) {
    let msg = {
        username: userName,
        message: message.trim(),
        timestamp: getCurrentTime() // Add timestamp
    };
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    socket.emit('message', msg);
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(type, 'message');

    let markup = `
        <h4>${msg.username}</h4>
        <p>${msg.message}</p>
        <p class="timestamp">${msg.timestamp}</p>
    `;

    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
});

// Function to get the current time in 'hh:mm' format
function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
}

// Listen for changes in font size, background color, and text color controls
document.getElementById('font-size').addEventListener('input', (evt) => {
    const fontSize = evt.target.value + 'px';
    document.body.style.fontSize = fontSize;
});

document.getElementById('bg-color').addEventListener('input', (evt) => {
    const bgColor = evt.target.value;
    document.body.style.backgroundColor = bgColor;
});

document.getElementById('text-color').addEventListener('input', (evt) => {
    const textColor = evt.target.value;
    document.body.style.color = textColor;
});

// Add a function to reset accessibility settings to defaults
document.getElementById('reset-accessibility').addEventListener('click', () => {
    document.getElementById('font-size').value = 16;
    document.getElementById('bg-color').value = '#ffffff';
    document.getElementById('text-color').value = '#333333';
    document.body.style.fontSize = '16px';
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333333';
});

// ... (previous code)

// Listen for changes in font size, background color, text color, and chat section color controls
document.getElementById('font-size').addEventListener('input', (evt) => {
    const fontSize = evt.target.value + 'px';
    document.body.style.fontSize = fontSize;
});

document.getElementById('bg-color').addEventListener('input', (evt) => {
    const bgColor = evt.target.value;
    document.body.style.backgroundColor = bgColor;
});

document.getElementById('text-color').addEventListener('input', (evt) => {
    const textColor = evt.target.value;
    document.body.style.color = textColor;
});

document.getElementById('chat-section-color').addEventListener('input', (evt) => {
    const chatSectionColor = evt.target.value;
    document.querySelector('.chat_section').style.backgroundColor = chatSectionColor;
});

// Add a function to reset accessibility settings to defaults
document.getElementById('reset-accessibility').addEventListener('click', () => {
    document.getElementById('font-size').value = 16;
    document.getElementById('bg-color').value = '#ffffff';
    document.getElementById('text-color').value = '#333333';
    document.getElementById('chat-section-color').value = '#ffffff';
    document.body.style.fontSize = '16px';
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333333';
    document.querySelector('.chat_section').style.backgroundColor = '#ffffff';
});

// ... (rest of the code)

