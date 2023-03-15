import React, { useState } from "react";
import io from 'socket.io-client';

import SupportWindow from './SupportWindow';

import Avatar from './Avatar';

const socket = io.connect(process.env.REACT_APP_SERVER_URL || "http://localhost:4000")

const SupportEngine = () => {
    const [visible, setVisible] = useState(false)


    return (
        <div className="chat-container">
            
            <SupportWindow visible={visible} socket={socket}/>

            <Avatar onClick= {() => setVisible(!visible)}/>
        </div>
    )
}

export default SupportEngine;

