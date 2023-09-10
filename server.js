const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Serve the 'index.html' file for the root path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server and listen on the specified port
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("A user has connected...");

    socket.on('join', (userName) => {
        // Notify everyone that a new user has joined with their name and a timestamp
        socket.broadcast.emit('message', {
            username: 'Chat Bot',
            message: `${userName} has joined the chat`,
            timestamp: getCurrentTime(),
        });

        // Handle messages and disconnections as before
        socket.on('message', (msg) => {
            console.log(msg);

            // Add a timestamp to the message before sending
            msg.timestamp = getCurrentTime();
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log("A user has disconnected...");

            // Notify everyone when a user disconnects with their name and a timestamp
            socket.broadcast.emit('message', {
                username: 'Chat Bot',
                message: `${userName} has left the chat`,
                timestamp: getCurrentTime(),
            });
        });
    });
});

// Function to get the current time in 'hh:mm' format
function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
}























/*const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Serve the 'index.html' file for the root path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server and listen on the specified port
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("A user has connected...");

    socket.on('join', (userName) => {
        // Notify everyone that a new user has joined with their name and a timestamp
        socket.broadcast.emit('message', {
            username: 'Chat Bot',
            message: `${userName} has joined the chat`,
            timestamp: getCurrentTime(),
        });

        // Handle messages and disconnections as before
        socket.on('message', (msg) => {
            console.log(msg);

            // Add a timestamp to the message before sending
            msg.timestamp = getCurrentTime();
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log("A user has disconnected...");

            // Notify everyone when a user disconnects with their name and a timestamp
            socket.broadcast.emit('message', {
                username: 'Chat Bot',
                message: `${userName} has left the chat`,
                timestamp: getCurrentTime(),
            });
        });
    });
});

// Function to get the current time in 'hh:mm' format
function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
}
*/




















/*const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT=3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

http.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

//Socket
const io=require('socket.io')(http);



/*
io.on('connection',(socket)=>{
    console.log("Connected...");
    socket.on('message',(msg)=>{
        console.log(msg);
        socket.broadcast.emit('message', msg);
    })
})*/

/*
io.on('connection', (socket) => {
    console.log("A user has connected...");

    // Notify everyone that a new user has joined
    socket.broadcast.emit('message', {
        username: 'Chat Bot',
        message: `User ${socket.userName} has joined the chat`,
    });

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message', msg);
    });

    // Notify everyone when a user disconnects
    socket.on('disconnect', () => {
        console.log("A user has disconnected...");

        socket.broadcast.emit('message', {
            username: 'Chat Bot',
            message: `User ${socket.userName} has left the chat`,
        });
    });
});*/

/*
io.on('connection', (socket) => {
    console.log("A user has connected...");

    // Receive the user's name from the client
    socket.on('join', (userName) => {
        // Notify everyone that a new user has joined with their name
        socket.broadcast.emit('message', {
            username: 'Chat Bot',
            message: `${userName} has joined the chat`,
        });

        // Handle messages and disconnections as before
        socket.on('message', (msg) => {
            console.log(msg);
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log("A user has disconnected...");

            // Notify everyone when a user disconnects with their name
            socket.broadcast.emit('message', {
                username: 'Chat Bot',
                message: `${userName} has left the chat`,
            });
        });
    });
});*/

/*io.on('connection', (socket) => {
    console.log("A user has connected...");

    // Receive the user's name from the client
    socket.on('join', (userName) => {
        // Notify everyone that a new user has joined with their name
        socket.broadcast.emit('message', {
            username: 'Chat Bot',
            message: `${userName} has joined the chat`,
            timestamp: getCurrentTime(), // Add timestamp here
        });

        // Handle messages and disconnections as before
        socket.on('message', (msg) => {
            console.log(msg);

            // Add a timestamp to the message before sending
            msg.timestamp = getCurrentTime();
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log("A user has disconnected...");

            // Notify everyone when a user disconnects with their name and a timestamp
            socket.broadcast.emit('message', {
                username: 'Chat Bot',
                message: `${userName} has left the chat`,
                timestamp: getCurrentTime(), // Add timestamp here
            });
        });
    });
});*/

// io.on('connection', (socket) => {
//     console.log("A user has connected...");

//     // Receive the user's name from the client
//     socket.on('join', (userName) => {
//         // Notify everyone that a new user has joined with their name and a timestamp
//         socket.broadcast.emit('message', {
//             username: 'Chat Bot',
//             message: `${userName} has joined the chat`,
//             timestamp: getCurrentTime(),
//         });

//         // Handle messages and disconnections as before
//         socket.on('message', (msg) => {
//             console.log(msg);

//             // Add a timestamp to the message before sending
//             msg.timestamp = getCurrentTime();
//             socket.broadcast.emit('message', msg);
//         });

//         socket.on('disconnect', () => {
//             console.log("A user has disconnected...");

//             // Notify everyone when a user disconnects with their name and a timestamp
//             socket.broadcast.emit('message', {
//                 username: 'Chat Bot',
//                 message: `${userName} has left the chat`,
//                 timestamp: getCurrentTime(),
//             });
//         });
//     });
// });
/*

function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
}

*/
