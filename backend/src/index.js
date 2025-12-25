
import express from "express"
import { createServer } from "http";
const app = express();
const httpServer = createServer(app);
app.get("/" , () => {
console.log("hi");
});
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import {Server} from "socket.io";
import { createUser } from "./controllers/userController.js";
import {createGroup, getAllgroups, getAllMessagesFromGroup } from "./controllers/groupController.js";
import { createMessageOfGroup } from "./controllers/messageController.js";
connectDB();
dotenv.config();
const io = new Server(httpServer , {
    cors:{   
        origin:"*"
    }
})

io.on("connection" , async (socket) => {
    socket.on("registerUser" , async ({userName})=> {
        const user = await createUser({userName});
        console.log(user);
        socket.emit("getRegisteredUser" , {
            isAvailable : true,
            userName : user.userName,
            userId : user._id,
        }
    )
        const groups = await getAllgroups();
    });
    socket.on("sendMessage" , ({userId , userName, messageData , groupId}) => {
        //user : user object and messagedata is just plain message
        const message = createMessageOfGroup({userId , messageData , groupId}); // from frontend only id is passed here always
        console.log(`message : ${ messageData}\t` + "group : " + groupId + "  sender : " + userId  + "\t user Name : " + userName);
        io.to(groupId).emit('receiveMessage' , {
               userId,
               userName,
               messageData,
        });
    })
    const value = await getAllgroups();
    console.log(value)
    socket.emit("getAllGroups" ,{
        groups :  value,
    })

    socket.on("createGroup" , async({groupName}) => {
        const group = await createGroup(groupName);
        console.log(group);
        socket.emit("getNewlyAddedGroup" , {
            groupName : group.groupName,
            groupId : group._id,

        })
    })

    socket.on("leaveGroup" , (groupId) => {
        socket.leave(groupId);
        console.log(`room left ${groupId}`)
    })

    socket.on("joinGroup" , async(groupId) => {
        socket.join(groupId)
        const group = await getAllMessagesFromGroup({groupId});
        if(!group){console.log("\ngroup not found");return;}
        socket.emit("getAllMessages" , {messages : group.messages})
        console.log(`room joined ${groupId}`)
    })
})
httpServer.listen(3000 , () => {console.log("listen at port 3000")});