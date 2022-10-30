import React from 'react'
import Messages from '~/components/Messages.jsx'
import Input from '~/components/Input.jsx'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src="../img/cam.png" alt="cam" />
                    <img src="../img/add.png" alt="add" />
                    <img src="../img/more.png" alt="more" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat