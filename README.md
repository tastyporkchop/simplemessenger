simplemessenger
===============

A simple inter-app messaging system

Using the examples
------------------

1.  Clone the repository on one or two systems

    ```
    git clone https://github.com/tastyporkchop/simplemessenger.git
    ```

2.  On the system running the client, edit the client_example.js to change the target
    to the system running the server.

    ```
    // add a target (change node1 to ip or dns name of target server)
    service.addFriend({host: 'node1', port: 8124});
    ```

2.   Start the server example

    ```
    cd simplemessenger/development
    node server_example.js
    ```

3.  Run the client example

    ```
    cd simplemessenger/development
    node client_example.js
    ```
