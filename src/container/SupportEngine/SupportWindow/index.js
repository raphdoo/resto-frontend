import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";


import chatbot from '../../../assets/chatbot.png';

import "../styles.css";

const options = [
    { key: "1", value: "Place Order" },
    { key: "99", value: "Checkout Order" },
    { key: "98", value: "See order History" },
    { key: "97", value: "See current Order" },
    { key: "0", value: "Cancel Order" },
  ];

const  foodStore = [
    {id: "1", name: "Ofada rice", price: "$10"},
    {id: "2", name: "Burger", price: "$15"},
    {id: "3", name: "Chicken", price: "$20"},
    {id: "4", name: "Plantain", price: "$15"},
    {id: "5", name: "Pounded yam", price: "$10"}

]




const SupportWindow = ({visible, socket}) => {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const [currentOrder, setCurrentOrder] = useState('')


    const sendMessage = async() => {
        if(currentMessage !== "") {
            let messageData = {
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            if (currentMessage === "99" || currentMessage === "97" || currentMessage === "0"){
                if(currentOrder.length > 1 ){
                    messageData.currentOrder = currentOrder
                }
            }

            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("")
            
        }
    }

    useEffect(() => {

        socket.on("receive_message", (data) => {
            setTimeout(()=>{
                if (data.err){
                    data.message = 'Please enter a valid value'   
                }

                if (foodStore.find(el => el.name === data.order)){
                    setCurrentOrder(data.order)
                }

                setMessageList((list) => [...list, data])
            }, 1500)
        })

    }, [socket])


    return (
        // <div className={`chat-window display}`} >
            <div className={`chat-window ${visible ? "display" : ""}`} >

            <div className='chat-header'>
                <img src={chatbot} style={{width:"40px", height:"40px"}} alt="chatbot"/>
                <p>Hi, How can I help you?</p>
            </div>

            <div className='chat-body'>
                <ScrollToBottom className='message-container'>
                    <div className="card">
                        <p style={{marginBottom:"10px", fontWeight:"bold"}}>Please select from options</p>
                        {
                            options.map((option, index) =>{
                                return (
                                    <div className='' key={option.key} id="you">
                                        <div className="">                                           
                                            <p>Enter {option.key} to {option.value}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                
                    {
                        messageList.map((messageContent, index)=>{
                            return (
                                <div className='message' key={messageContent.message + index} id={ index%2 === 0 ? "other" : "you"}>
                                    <div className={`${(messageContent.metaData && messageContent.metaData.length) ? 'metadata-container' : 'message-content'}`}>
                                        {messageContent.metaData && messageContent.metaData.length && <p style={{marginBottom:"10px", fontWeight:"bold", fontSize:"14px"}}>{messageContent.message}</p>}
                                        {
                                            
                                            messageContent.metaData && messageContent.metaData.length ? (

                                                messageContent.metaData.map((datum, index)=> (
                                                    <li key={datum.id}>{`${datum.name} ${datum.status ? ` - status is ${datum.status}` : `at ${datum.price}`}`}</li>
                                                ))
                                            )
                                            : (
                                                <p>{messageContent.message}</p> 
                                            )
                                        }
                               
                                    </div>
                                    <div className="message-meta">
                                        { messageContent.time && <p id="time">{messageContent.time}</p>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </ScrollToBottom>
                </div>

            <div className='chat-footer'>
                <input type="text" value={currentMessage} placeholder="Your message" onChange={(e) => setCurrentMessage(e.target.value)} onKeyPress={(e)=> { e.key === 'Enter' && sendMessage()}}/>
                <button className="button" onClick={sendMessage}> Send </button>
            </div>
            
        </div>
    )
}

export default SupportWindow;
