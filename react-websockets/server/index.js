const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const { json } = require('express');

const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});

const clients = {};
const users = {};
let editorContent = null;
let userActivity = [];

const typesDef = {
  USER_EVENT: 'userevent',
  CONTENT_CHANGE: 'contentchange'
};

const sendMessage = (json) => {
  Object.keys(clients).map(client => {
    clients[client].sendUTF(json);
  })
}

const getUniqueId = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
}

wsServer.on('request', (request) => {
  let userId = getUniqueId();

  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

  const connection = request.accept(null, request.origin);
  clients[userId] = connection;

  console.log('connected: ' + userId + ' in ' + Object.getOwnPropertyNames(clients));

  connection.on('message', (message) => {
    if(message.type === 'utf8') {
      const dataFromClient = JSON.parse(message.utf8Data);
      const json = { type: dataFromClient.type };

      if(dataFromClient.type === typesDef.USER_EVENT) {
        users[userId] = dataFromClient;
        userActivity.push(`${dataFromClient.username} joined to edit the documeent`);
        json.data = { users, userActivity };
      } else if(dataFromClient.type === typesDef.CONTENT_CHANGE) {
        editorContent = dataFromClient.content;
        json.data = { editorContent, userActivity };
      }
      sendMessage(JSON.stringify(json));
    }
  });

  connection.on('close', (connection) => {
    console.log((new Date()) + " Peer " + userId + " disconnected.");

    const json = { type: typesDef.USER_EVENT };
    userActivity.push(`${users[userId].username} left the document`);
    json.data = { users, userActivity };
    delete clients[userId];
    delete users[userId];
    sendMessage(JSON.stringify(json));
  })
});