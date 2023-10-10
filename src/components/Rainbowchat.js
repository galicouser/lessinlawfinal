import React, { useState } from 'react'

const Rainbowchat = () => {
    return (
        <div
            className="chat-container"
        >
            <iframe
                style={{
                    width: '350px',
                    height: '650px',
                    borderRadius: '4%',
                }}
                id="rainbow-chat"
                src="https://1532.3cx.cloud/rtt"
                allowFullScreen={true}
            ></iframe>
        </div>
    )
}

export default Rainbowchat
