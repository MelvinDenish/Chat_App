// // import { WebSocket , WebSocketServer } from "ws";

// // const wss = new WebSocketServer({port:8080})

// // wss.on("connection" , (ws) => {
// //     ws.on("message" , (messege) => {
// //         console.log(messege.toString())
// //         ws.send("hii...")
// //     });
// //     ws.on("error" , (error) => console.log(messege));
// // })

// import { Server } from "socket.io"
// import { createServer } from "http"
// import express from "express"

// const app = express();
// const httpServer = createServer(app)
// app.get("/" , (req , res) => {
//     res.json({message : "wieufbiubiewurbf"});
// });
// const io = new Server(httpServer , {
//     cors:{
//         origin:"*"
//     }
// })
// io.on("connection" , (socket) => {
//     socket.on("message" , (message) => {
//         socket.broadcast.emit("messege" , message)
//     })
// })


// httpServer.listen(3000 , () => {
//     console.log(`SERVER running in port ${3000}`);
// })
const app = require("express")();
const httpServer = require("http").createServer(app);
app.get("/" , (req , res) => {
    res.json({message:"fi"})
});
const {Server} = require("socket.io");
const io = new Server(httpServer , {
    cors:{
        origin:"*"
    }
})

io.on("connection" , (socket) => {
    socket.on("send_message" , (message) => {
        console.log(`${message}`)
        io.emit('receive_message' , {
            message , 
            userid : socket.id
        });
    })
})
httpServer.listen(3000 , () => {console.log("listen at port 3000")});