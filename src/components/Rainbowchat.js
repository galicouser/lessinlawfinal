import React, { useState } from 'react'

const Rainbowchat = () => {
    return (
        <div
            className="chat-container"
            style={{
                width: '100%',
                height: '750px',

            }}
        >
            <iframe
                style={{
                    width: '100%',
                    height: '650px',
                    borderRadius: '4%',
                }}
                id="rainbow-chat"
                src="https://secure.penntelco.com/chat_widget/index.php"
                allowFullScreen={true}
            ></iframe>
        </div>
    )
}

export default Rainbowchat
