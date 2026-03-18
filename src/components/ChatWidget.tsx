'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    // Prevent empty messages
    if (!inputValue.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    // Add user message to state
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      // Create bot message
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: data.response,
        timestamp: new Date(),
      };

      // Add bot message to state
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Error sending message:', err);

      // Add error message to chat
      const errorMsgBot: Message = {
        id: `error-${Date.now()}`,
        type: 'bot',
        content: `Xin lỗi, có lỗi xảy ra: ${errorMessage}. Vui lòng thử lại hoặc liên hệ nhân viên hỗ trợ.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsgBot]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Press Enter to send message
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <>
      {/* Chat Widget Container */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {/* Chat Window */}
        {isOpen && (
          <div className="mb-4 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col h-96">
            {/* Header */}
            <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">HACO Chat Assistant</h3>
                <p className="text-blue-100 text-sm">Sẵn sàng hỗ trợ bạn</p>
              </div>
              <button
                onClick={handleClearChat}
                className="text-blue-100 hover:text-white text-xs underline"
                title="Clear chat"
              >
                Clear
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="text-gray-500">
                    <p className="font-semibold mb-2">Xin chào! 👋</p>
                    <p className="text-sm">Hãy đặt câu hỏi về dịch vụ logistics của chúng tôi</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-900 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                            style={{ animationDelay: '0.1s' }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded border border-red-200">
                      {error}
                    </div>
                  )}

                  {/* Scroll to bottom anchor */}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    '↳'
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Nhấn Enter để gửi</p>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center font-bold text-2xl transition-all hover:scale-110 active:scale-95"
          title={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>
    </>
  );
}
