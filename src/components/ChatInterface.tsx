import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Send initial message
    setMessages([
      {
        role: "assistant",
        content: "Hey, it's Dharatal AI🤖 What do you need help with? ✨"
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/yz4o4r49vpaoydbbn8lwwo83d27fikt9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.body }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "error" }]);
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
            className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] p-3 border-2 border-black ${
                message.role === "assistant"
                  ? "bg-[#FF90E8] text-black"
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