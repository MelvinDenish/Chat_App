const app = require("express")();

const httpServer = require("http").createServer(app);
app.get("/" , (req , res) => {
console.log("hi");
});

const {Server} = require("socket.io");
const io = new Server(httpServer , {
    cors:{
        origin:"*"
    }
})

io.on("connection" , (socket) => {
    socket.on("send-message" , ({messagedata , groupId}) => {
        console.log(`message : ${ messagedata.message}\t` + "group : " + groupId + "  sender : " + messagedata.sender)
        io.to(groupId).emit('receive-message' , {
               message : messagedata.message, 
               sender : messagedata.sender,
               groupId,
        });
    })
    socket.on("leave-room" , (groupId) => {
        socket.leave(groupId);
        console.log(`room left ${groupId}`)
    })
    socket.on("join-room" , (groupid) => {
        
        socket.join(groupid)
        console.log(`room joined ${groupid}`)
    })
})
httpServer.listen(3000 , () => {console.log("listen at port 3000")});