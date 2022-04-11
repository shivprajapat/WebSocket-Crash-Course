const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 9876
}, function () {
    wss.on('connection', (ws) => {
        ws.on('message', function (data) {
            console.log('WebSocket 🔥 ready on port http://localhost:5500');
        })
    })
})


console.log(wss);