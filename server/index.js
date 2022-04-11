const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 9876
},function () {
    wss.on('connection',(ws)=>{
     ws.send('Hello Server',ws)
    })

})

console.log(wss);
