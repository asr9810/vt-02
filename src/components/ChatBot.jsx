import { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // from react-icons/lucide or lucide-react

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages([...messages, userMessage]);

    // Fake bot response (later connect with backend/AI)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "🤖 This is a demo response!" }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">ChatBot</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-2 py-1 mr-2 focus:outline-none"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
}
