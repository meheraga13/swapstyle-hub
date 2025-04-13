function sendMessage() {
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sender');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        // Scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }
}