var message_service = require('message_service');

// create the service
var service = message_service.createService();

// start the service
service.start();

// add a target (change node1 to ip or dns name of target server)
service.addFriend({host: 'node1', port: 8124});

// send some data
service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");
//service.sendMessage("I like you a whole lot - ");

// shutdown
service.shutdown();
