import { useTheme } from 'next-themes'

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Smile } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const ButtonHover1 = () => {
    return (
      <>
        <button className="group relative inline-flex h-[calc(48px+8px)] w-[200px]  items-center justify-center rounded-full  py-1 pl-6 pr-14 font-medium bg-pink-500 text-white">
          <span className="z-10 pr-2">Donate Now</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#5052e7] bg-gray-500 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </>
    )
  }


export const ButtonHover11 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme()

  return (
    <>
      <button className="group relative flex h-12 w-[190px]  items-center justify-between border-2 border-pink-500 text-pink-500 px-6 py-3 mx-6 rounded-full hover:scale-105 transition-transform shadow-md">
        <span className="pl-4">Contact me</span>
        <div className="relative h-11 w-11 overflow-hidden  dark:bg-white bg-gray-500 text-white rounded-full mr-1 left-6">
          <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill={theme === 'light' ? 'black' : 'white'}
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mb-1 -translate-x-4"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill={theme === 'light' ? 'black' : 'white'}
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </button>
    </>
  )
}


// import React, { useState } from 'react';
// import { MessageCircle, X, Send, Smile } from 'lucide-react';




const INITIAL_MESSAGE = {
  type: 'bot',
  message: "Hello! I'm here to help. How can I assist you today?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([INITIAL_MESSAGE]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  // Simulated AI response generation
  const generateAIResponse = async (userMessage) => {
    // This is where you'd integrate with your AI backend
    // For now, we'll simulate some intelligent responses
    const responses = [
      "I understand you're asking about {topic}. Let me help you with that.",
      "That's an interesting question about {topic}. Here's what I know...",
      "Based on what you're saying about {topic}, I would suggest...",
      "Let me analyze {topic} and provide a detailed response...",
    ];

    const topic = userMessage.toLowerCase().split(' ').slice(-3).join(' ');
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      .replace('{topic}', topic);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    return randomResponse;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    const userMessage = {
      type: 'user',
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    setIsProcessing(true);

    try {
      const aiResponse = await generateAIResponse(userMessage.message);
      
      setIsTyping(false);
      const botResponse = {
        type: 'bot',
        message: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatHistory(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error generating response:', error);
      // Handle error appropriately
      const errorResponse = {
        type: 'bot',
        message: "I apologize, but I'm having trouble processing your request. Could you try again?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, errorResponse]);
    } finally {
      setIsProcessing(false);
      setIsTyping(false);
    }
  };

  const MessageBubble = ({ chat }) => (
    <div className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2`}>
      {chat.type === 'bot' && (
        <Avatar className="mt-1">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
          chat.type === 'user'
            ? 'bg-pink-500 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
        <p className={`mt-1 text-xs ${chat.type === 'user' ? 'text-pink-100' : 'text-gray-400'}`}>
          {chat.timestamp}
        </p>
      </div>
      {chat.type === 'user' && (
        <Avatar className="mt-1 bg-gray-500">
          <AvatarFallback className="text-white">You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-96 rounded-3xl bg-white shadow-xl">
          <div className="flex items-center justify-between rounded-t-3xl bg-pink-500 p-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-pink-100">Always Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <div className="flex flex-col space-y-4">
              {chatHistory.map((chat, index) => (
                <MessageBubble key={index} chat={chat} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isProcessing}
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-100 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                disabled={isProcessing}
                className="rounded-full p-2 text-gray-400 hover:bg-pink-50 hover:text-pink-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Smile className="h-5 w-5" />
              </button>
              <button
                type="submit"
                disabled={isProcessing || !message.trim()}
                className="rounded-full p-2 text-gray-400 hover:bg-pink-50 hover:text-pink-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-pink-500 text-white transition-all duration-300 hover:w-36 hover:shadow-xl"
      >
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
          Chat with AI
        </div>
        <div className="absolute right-4">
          <MessageCircle className="h-6 w-6" />
        </div>
      </button>
    </div>
  );
};

