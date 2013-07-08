var message_service = require('message_service');

// inline config example for server
//
// var config = {
//     host: 'foo.example.com',
//     port: 8124,
//     localAddress: 0
// };

// create service useing defaults (listen on 0.0.0.0:8124)
var service = message_service.createService();

// register any message handlers at this level
// this simple one just prints the content of received messages
service.on('received_message', function(message) {
    console.log('application receieved data:'+message);
});

// start the server (ctrl-c to stop)
service.start();
