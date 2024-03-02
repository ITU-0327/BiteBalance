import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './Chatbot.css';


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const [isBotThinking, setIsBotThinking] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [messages]);

  const sendBotMessage = (text, delay = 0, sources = []) => {
    setTimeout(() => {
      const botMessage = { 
        id: Date.now(), 
        text, 
        sources,
        sender: 'bot', 
        timestamp: new Date().toLocaleTimeString() 
      };
      setMessages(messages => [...messages, botMessage]);
    }, delay);
  };

  // useEffect to send initial bot messages when the page loads
  useEffect(() => {
    const timeouts = [];
    const delayMessage1 = setTimeout(() => {
      sendBotMessage("I'm your go-to nutrition navigator, ready to help you balance your meals, discover delicious recipes, and organize your shopping lists with ease.", 0);
    }, 500);
    timeouts.push(delayMessage1);
  
    const delayMessage2 = setTimeout(() => {
      sendBotMessage("What’s on your menu today? Share your cravings or a photo of your pantry, and let's create something tasty and healthy together!", 0);
    }, 1500);
    timeouts.push(delayMessage2);
  
    // Cleanup function
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);


  const azureFunctionUrl = 'https://bitebalance-chatbot.azurewebsites.net/api/chatbot_function';

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { 
      id: Date.now(), 
      text: inputValue, 
      sender: 'user', 
      timestamp: new Date().toLocaleTimeString(),
      sources: [] // User messages do not have sources
    };
    setMessages([...messages, userMessage]);
    
    setInputValue('');

    setIsBotThinking(true); // Start loading animation

    try {
      const response = await axios.post(azureFunctionUrl, { query: inputValue });
      const botMessage = { 
        id: Date.now(), 
        text: response.data.text,
        sources: response.data.sources,
        sender: 'bot', 
        timestamp: new Date().toLocaleTimeString() 
      };
      setMessages(messages => [...messages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsBotThinking(false); // Stop loading animation
    }
  };

  const renderMessageContent = (message) => {
    const withBoldQuotes = message.text.replace(/"([^"]*)"/g, '**"$1"**');

    const rawMarkup = marked.parse(withBoldQuotes);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);

    const senderName = message.sender === 'user' ? 'You' : 'BiteBalance';
  
    return (
      <div>
        {/* Display sender's name */}
        <div className="message-sender">{senderName}</div>

        {/* Render the message as HTML */}
        <div className="message-content" dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}></div>

        {/* Render sources if they exist */}
        {message.sources && message.sources.length > 0 && (
          <div className="message-sources">
            Sources:&nbsp;
            {message.sources.map((source, index) => (
              <span key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title || source.url}  {/* Fallback to URL if title is not available */}
                </a>
                {index < message.sources.length - 1 ? ' ' : ''}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };


  return (
    <div className="chat-container">
      <div className="chat-header">
        <a className="chat-header" href='/home-page'>
          <h2>BiteBalance Chat</h2>
        </a>
      </div>
      <div className="chat-body">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            {renderMessageContent(message)}
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
        {isBotThinking && <div className="message bot">Be patient BiteBalance is thinking...</div>}
        {isBotThinking && <div className="spinner"></div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
