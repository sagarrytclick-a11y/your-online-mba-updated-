"use client";
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hi! I'm CourseMate AI. Ask me anything about Online MBA programs, specializations, admissions, or career outcomes — I'm here to help!",
};

const WELCOME_SUGGESTIONS = [
  "What is an Online MBA?",
  "Which specialization is best for me?",
  "How do I apply for an Online MBA?",
  "What are the career benefits?",
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CourseMateChat = ({ isOpen, onClose }: Props) => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMsg: Message = { role: "user", content };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = updated.map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/course-mate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message.content }]);
      } else if (res.status === 401 || res.status === 500) {
        setMessages((prev) => [...prev, { role: "assistant", content: "I'm temporarily unavailable. Please reach out to us directly at **9839865347** or email **Abhishek@vidyavriddhi.com** for any Online MBA queries." }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "I'm temporarily unavailable. Please reach out to us directly at **9839865347** or email **Abhishek@vidyavriddhi.com** for any Online MBA queries." }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm temporarily unavailable. Please reach out to us directly at **9839865347** or email **Abhishek@vidyavriddhi.com** for any Online MBA queries." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-[#C81E3D] to-[#B01A33] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-base">CourseMate AI</h2>
              <p className="text-xs text-white/80 font-medium">Online MBA Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-5 bg-[#FAFAFA]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === "assistant" ? "bg-[#C81E3D]/10 text-[#C81E3D]" : "bg-[#1E293B] text-white"
                }`}
              >
                {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-medium ${
                  msg.role === "assistant"
                    ? "bg-white border border-gray-100 text-[#1E293B]"
                    : "bg-[#C81E3D] text-white"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Welcome suggestions (only before first user message) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {WELCOME_SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-bold text-[#475569] hover:border-[#C81E3D]/30 hover:text-[#C81E3D] transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C81E3D]/10 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-[#C81E3D]" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3">
                <Loader2 size={16} className="animate-spin text-[#C81E3D]" />
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-gray-100 px-6 py-4 bg-white">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Online MBA..."
              disabled={loading}
              className="flex-1 h-12 px-4 border border-gray-200 rounded-xl text-sm text-[#1E293B] outline-none focus:border-[#C81E3D] transition-all font-medium placeholder:text-gray-400 disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-12 h-12 bg-[#C81E3D] hover:bg-[#B01A33] rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
          <p className="text-[10px] text-gray-400 font-medium text-center mt-2">
            Responses are AI-generated. Verify with EdHike counsellors for accuracy.
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseMateChat;
