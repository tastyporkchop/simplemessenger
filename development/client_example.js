var message_service = require('message_service');

// create the service
var service = message_service.createService();

// start the service
service.start();

// add a target (change node1 to ip or dns name of target server)
service.addFriend({host: 'node1', port: 8124});

// send some data
for(var i=0; i<30; i++) {
    service.sendMessage("I like you a whole lot "+i);
}

// shutdown
service.shutdown();
