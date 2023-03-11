//Import necessary modules
import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";
import ChatBoxReceiver, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import UserLogin from './UserLogin';

//Define component ChatContainer
export default function ChatContainer() {

    //Create socket instance
    let socketio = socketIOClient("http://localhost:5000")

    //Set state variables
    const [chats , setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const avatar = localStorage.getItem("avatar")

    //Add effect hook to listen for 'chat' events from socket
    useEffect(()=> {
      socketio.on('chat', senderChats => {
        setChats(senderChats)
      })
    })

    //Function to emit chat to socket
    function sendChatToSocket(chat){
      socketio.emit("chat", chat)
    }

    //Function to add message to chats state and emit to socket
    //This will be called everytime a message has been added to the chat application
    function addMessage(chat){
      const newChat = {...chat , user , avatar}
      setChats([...chats , newChat])
      sendChatToSocket([...chats , newChat])
    }

    //Function to log out user
    function logout(){
      localStorage.removeItem("user")
      localStorage.removeItem("avatar")
      setUser("")
    }

    //Function to create chat list
    function ChatsList(){
      return chats.map((chat, index) => {
        if(chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user}/>
        return <ChatBoxReceiver key={index} message={chat.message} avatar={chat.avatar} user={chat.user}/>
      })
    }

  //Render the component
  return (
    <div>
      {
      user ? 
      <div>
      <div style={{display:'flex', flexDirection:"row", justifyContent: 'space-between'}}>
        <h4>Username: {user}</h4>
        <p onClick={()=> logout()} style={{color:"blue", cursor:'pointer'}}>Log Out</p>
      </div>

        <ChatsList/>
        <InputText addMessage={addMessage} />
      </div>
      :
      

       <UserLogin setUser={setUser} />
      }
    </div>
  )
}
