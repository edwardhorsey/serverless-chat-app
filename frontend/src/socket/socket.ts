const webSocketConnection = 'wss://mkyspgh8uf.execute-api.eu-west-1.amazonaws.com/dev';
export const socket = new WebSocket(webSocketConnection);

export const joinChat = (value: string) => {
  socket.onopen = () => console.log('connected to server');
  const request = { "action": "setName", "name": value };
  socket.send(JSON.stringify(request))
}

socket.onclose = () => console.log('disconnected from server');