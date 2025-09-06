import React, { useState, useEffect, useRef } from 'react'
import { Send, Bot, User } from 'lucide-react';
import { getBotResponse } from '../utils/botResponse';

//typing indicator component
const TypingIndicator = () => {
    return (
        <div className="flex items-start gap-2 justify-start">
            <div className="bg-gray-200 p-2 rounded-full">
                <Bot size={16} className="text-green-600" />
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                <div className="flex items-center gap-1">
                    <span className="text-sm">typing</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function ChatBot() {
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            text: "Hello! I am Greendee Roper, your friendly chatbot. How can I assist you today?", 
            sender: 'bot' 
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    //create a ref for the messages container
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);
    //create a ref for the input field
    const inputRef = useRef(null);

    //function to scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    //auto-scroll when messages change or when typing status changes
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { id: Date.now(), text: input, sender: 'user' };
            setMessages(prev => [...prev, userMessage]);
            
            //clear input first
            setInput('');
            
            //show typing indicator
            setIsTyping(true);
            
            //focus input immediately after clearing
            setTimeout(() => {
                inputRef.current?.focus();
            }, 10);
            
            //simulate bot response delay with typing effect
            setTimeout(() => {
                const botResponse = { 
                    id: Date.now() + 1, 
                    text: getBotResponse(input), 
                    sender: 'bot' 
                };
                setMessages(prev => [...prev, botResponse]);
                setIsTyping(false);
                //focus input again after bot response with small delay
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 10);
            }, 1500); //increased delay to show typing effect
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 text-white p-4 flex items-center gap-2">
            <Bot size={24} />
            <h2 className="text-lg font-semibold">Greendee Roper Chatbot</h2>
        </div>
        
        <div 
            ref={messagesContainerRef}
            className="h-96 overflow-y-auto p-4 space-y-3"
        >
            {
                messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start gap-2 ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {
                            message.sender === 'bot' && (
                                <div className="bg-gray-200 p-2 rounded-full">
                                    <Bot size={16} className="text-green-600" />
                                </div>
                            )
                        }
                        <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                                message.sender === 'user'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                            }`}
                        >
                            {message.text}
                        </div>
                        {
                            message.sender === 'user' && (
                                <div className="bg-green-600 p-2 rounded-full">
                                    <User size={16} className="text-white" />
                                </div>
                            )
                        }
                    </div>
                ))
            }
            
            {/* show typing indicator when bot is typing */}
            {isTyping && <TypingIndicator />}
            
            {/* invisible div to scroll to */}
            <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t">
            <div className="flex gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    autoFocus
                />
                <button
                    onClick={handleSend}
                    disabled={isTyping}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChatBot