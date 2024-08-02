import React, { useState } from 'react';
import axios from 'axios';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Replace 'YOUR_API_KEY' with your actual API key obtained from OpenAI
    const YOUR_API_KEY = 'YOUR_API_KEY';

    const sendMessage = async (message) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci/completions',
                {
                    prompt: message,
                    max_tokens: 150,
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${YOUR_API_KEY}`,
                    },
                }
            );

            const reply = response.data.choices[0].text.trim();
            setMessages([...messages, { text: message, user: true }, { text: reply, user: false }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, { text: 'Sorry, I am unable to respond at the moment.', user: false }]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, user: true }]);
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <img src="" alt="" />
            <form onSubmit={handleSubmit} className="input-container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input-field" />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
};

export default Chat;
