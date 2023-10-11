import React, { useState } from 'react'

const Rainbowchat = () => {
  return (
    <div
      className="chat-container"
      style={{
        width: '450px',
        height: '750px',
        marginTop: '3.5rem',
      }}
    >
      <iframe
        style={{
          width: '350px',
          height: '650px',
          marginTop: '5rem',
          borderRadius: '4%',
        }}
        id="rainbow-chat"
        src="https://1532.3cx.cloud/callus/#rtt"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

export default Rainbowchat
