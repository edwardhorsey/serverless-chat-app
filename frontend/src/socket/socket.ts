const webSocketConnection = 'wss://mkyspgh8uf.execute-api.eu-west-1.amazonaws.com/dev';
export const socket = new WebSocket(webSocketConnection);

export const joinChat = (value: string) => {
  socket.onopen = () => console.log('connected to server');
  const request = { "action": "setName", "name": value };
  socket.send(JSON.stringify(request))
}

socket.onclose = () => console.log('disconnected from server');


// socket.onopen = function(event) {
//   document.getElementById("socketState").innerHTML = 'Connection Open';

//   document.getElementById("connectToWebSocketButton").disabled = true;
//   document.getElementById("disconnectButton").disabled = false;
//   document.getElementById("sendMessageButton").disabled = false;
// };

// socket.onmessage = function(event) {
//   document.getElementById("messages").innerHTML += event.data + '<br/>'
// };

// socket.onerror = function(event) {
//   console.error("WebSocket error observed:", event);
//   document.getElementById("socketState").innerHTML = 'Connection Error';
// };

// socket.onclose = function(event) {
//   document.getElementById("socketState").innerHTML = 'Connection Closed';
//   document.getElementById("connectToWebSocketButton").disabled = false;
//   document.getElementById("disconnectButton").disabled = true;
//   document.getElementById("sendMessageButton").disabled = true;
// };
// }