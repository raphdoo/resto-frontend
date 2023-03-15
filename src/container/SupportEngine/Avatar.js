import React, { useState } from "react";
import chatbot from '../../assets/chatbot.png';

import './styles.css'

const Avatar = props => {
    // const [hovered, setHovered] = useState(false)

    return (
        <div 
            className="avatar-area"
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            onClick={() => props.onClick && props.onClick()}
        >
            <div className='transition-3 '>
                <p className={`avatar-text`}>Hey, I am minibot, your AI assistant </p>
            </div>

            <div className="avatar">   
                <img src={chatbot} style={{width:"60%"}} alt="chatbot"/>
            </div>
        </div>
    )
}

export default Avatar;