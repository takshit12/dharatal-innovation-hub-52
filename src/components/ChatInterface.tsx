import React, { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

interface Message {
  role: "assistant" | "user" | "debug";
  content: string;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{
      role: "assistant",
      content: "Hey, it's Dharatal AI🤖 What do you need help with? ✨"
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addDebugMessage = (content: string) => {
    setMessages(prev => [...prev, { role: "debug", content }]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = input.trim();
    
    if (!userMessage || isLoading) return;

    try {
      setInput("");
      setIsLoading(true);
      setMessages(prev => [...prev, { role: "user", content: userMessage }]);

      addDebugMessage(`Sending message: ${userMessage}`);

      const response = await fetch("https://hook.eu2.make.com/yz4o4r49vpaoydbbn8lwwo83d27fikt9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      addDebugMessage(`Response status: ${response.status}`);
      
      const responseText = await response.text();
      addDebugMessage(`Raw response: ${responseText}`);

      if (responseText) {
        try {
          const data = JSON.parse(responseText);
          addDebugMessage(`Parsed data: ${JSON.stringify(data, null, 2)}`);

          if (Array.isArray(data) && data.length > 0 && data[0].body) {
            const assistantMessage = data[0].body.trim();
            addDebugMessage(`Extracted message: ${assistantMessage}`);
            
            setMessages(prev => [...prev, {
              role: "assistant",
              content: assistantMessage
            }]);
          } else {
            throw new Error("Invalid response structure");
          }
        } catch (parseError) {
          addDebugMessage(`Parse error: ${parseError.message}`);
          addDebugMessage(`Response text length: ${responseText.length}`);
          addDebugMessage(`First 50 characters: ${responseText.slice(0, 50)}`);
          throw parseError;
        }
      } else {
        throw new Error("Empty response received");
      }
    } catch (error) {
      addDebugMessage(`Error: ${error.message}`);
      if (error.stack) {
        addDebugMessage(`Stack: ${error.stack}`);
      }
      
      setMessages(prev => [...prev, {
        role: "assistant",
        content: `Error: ${error.message}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="neobrutalism bg-white p-6 max-w-3xl mx-auto">
      <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "assistant" 
                ? "justify-start" 
                : message.role === "user"
                  ? "justify-end"
                  : "justify-center"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 border-2 border-black ${
                message.role === "assistant"
                  ? "bg-[#FF90E8] text-black"
                  : message.role === "debug"
                    ? "bg-gray-100 text-gray-600 font-mono text-sm"
                    : "bg-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 border-2 border-black bg-[#FF90E8] text-black">
              thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={sendMessage} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="neobrutalism flex-1"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="neobrutalism bg-[#FF90E8] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};