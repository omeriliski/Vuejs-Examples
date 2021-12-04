const socketio=require("socket.io");
const express=require("express");
const app=express();
const http=require("http");

const PORT=process.env.PORT || 2022;

const server=http.createServer(app);

const io=socketio(server,{
    cors:{
        origin:"*",
        methods:["GET","POST","OPTIONS"]
    }
});

server.listen(PORT,()=>{
    console.log("server listening")
    io.on("connection",socket=>{
        console.log(socket.id);
        socket.emit("WELCOME_MESSAGE",`Client number ${socket.id}, welcome...`);
        socket.on("NEW_BOOKMARK_EVENT",(bookmark)=>{
            console.log("message",bookmark); 
            io.emit("NEW_BOOKMARK_ADDED")
            // socket.emit("MESSAGE",message)
        })
    })
})
