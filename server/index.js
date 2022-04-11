const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 9876
})
wss.on('connection', function (ws) {
    ws.on('message', function (data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    })


})