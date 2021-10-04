const chatWidget = document.querySelector('.chat-widget');
const widgetMessages = document.querySelector('#chat-widget__messages');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const sideWidget = document.querySelector('.chat-widget__side');
const input = document.querySelector('#chat-widget__input');

sideWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

function printMessage(text, client = null) {
  let date = new Date()
  let time = `${date.getHours()}:${date.getMinutes()}`;
  let message = document.createElement('div');
  message.classList.add('message');
  if (client) message.classList.add('message_client');
  message.innerHTML = `
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
  `;
  widgetMessages.append(message)
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function getMessage() {
  const messages = [
    'У нас обед',
    'До свидания',
    'Рабочий день кончился',
    'Заявки рассматриваются по четвергам четных недель нечетных месяцев високосных годов ',
    'Ваше мнение очень важно для нас',
  ];
  let idx = Math.floor(Math.random() * messages.length)
  return messages[idx];
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.value.trim()) {
    printMessage(e.target.value, 'client');
    e.target.value = null;
    const botMsg = getMessage();
    printMessage(botMsg);
  }
})
