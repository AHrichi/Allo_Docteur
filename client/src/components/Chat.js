import React from 'react'
import './Chat.css'
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from "../components/ChatFeed"
import LoginForm from '../components/LoginForm'
import { logOutChat } from '../Redux/actions/user';
const projectID = 'b726abaf-85d9-45d9-b84a-0515662a5502'
const Chat = () => {
    const history = useHistory();
  const dispatch=useDispatch()
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <div>
    <button onClick={()=>{dispatch(logOutChat());
    history.push('/')}}>LOG OUT</button>

        <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
    
    )
    
}

export default Chat
