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
    // Initial bot messages
    sendBotMessage("I'm your go-to nutrition navigator, ready to help you balance your meals, discover delicious recipes, and organize your shopping lists with ease.", 500);
    sendBotMessage("What’s on your menu today? Share your cravings or a photo of your pantry, and let's create something tasty and healthy together!", 1500);
  
    // Handle URL parameter
    const queryParams = new URLSearchParams(window.location.search);
    const userMessage = queryParams.get('message');
    if (userMessage) {
      // Simulate typing the message after initial messages
      setTimeout(() => {
        setInputValue(userMessage); // Set the message as if typed
        sendMessage(userMessage); // Directly send the message
      }, 2000); // Ensure this happens after the bot messages
    }
  
    // Cleanup
    return () => timeouts.forEach(clearTimeout);
  }, []);


  const azureFunctionUrl = 'https://bitebalance-chatbot.azurewebsites.net/api/chatbot_function';

  const sendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;
  
    // Create and add the user message to the state
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
      sources: [] // Assuming no sources for user messages
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
  
    setInputValue(''); // Clear the input field
  
    setIsBotThinking(true);
  
    const chatHistory = messages.map(m => ({ text: m.text, sender: m.sender }));
    try {
      const response = await axios.post(azureFunctionUrl, {
        query: messageText,
        chatHistory: chatHistory
      });
  
      // Add the bot response to the chat
      setMessages(prevMessages => [...prevMessages, {
        id: Date.now(),
        text: response.data.text || '', // Use an empty string as a fallback
        sources: response.data.sources || [],
        shopping_list_links: response.data.shopping_list_links || [],
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsBotThinking(false);
    }
  };
  

  const renderMessageContent = (message) => {
    const withBoldQuotes = message.text.replace(/"([^"]*)"/g, '**"$1"**');
    const rawMarkup = marked.parse(withBoldQuotes);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
  
    const senderName = message.sender === 'user' ? 'You' : 'BiteBalance';
  
    const shoppingListLinksRender = message.shopping_list_links && message.shopping_list_links.length > 0 && (
      <div className="message-shopping-list">
        <div className="shopping-list-title">Shopping List:</div>
        <ul className="shopping-list-items">
          {message.shopping_list_links.map((item, index) => (
            <li key={index} className="shopping-list-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  
    return (
      <div className="message">
        <div className="message-sender">{senderName}</div>
        <div className="message-content" dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}></div>
        {message.sources && message.sources.length > 0 && (
          <div className="message-sources">
            Sources:&nbsp;
            {message.sources.map((source, index) => (
              <span key={index} className="message-source-item">
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title || source.url}
                </a>
                {index < message.sources.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
        {shoppingListLinksRender}
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
