const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 9876
},function () {
    console.log('Say hi to websocket on port http://localhost:9876');

})

console.log(wss);
