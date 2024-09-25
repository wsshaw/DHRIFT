import * as webllm from "@mlc-ai/web-llm";
import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Import syntax highlighting theme

// Define a custom Markdown component with code highlighting
const MarkdownWithHighlight = ({ children }) => {
    return (
      <Markdown
        options={{
          overrides: {
            code: {
              component: ({ className, children }) => {
                // Ensure the className follows the 'language-' pattern
                const language = className ? className.replace('lang-', 'language-').replace('language-', '') : '';
  
                // Join children to handle multiline or single-line code blocks properly
                const codeString = Array.isArray(children) ? children.join('') : children;
  
                // Highlight the code properly based on the detected language
                const highlightedCode = language
                  ? hljs.highlight(codeString, { language }).value
                  : hljs.highlightAuto(codeString).value;
                
                return (
                  <div dangerouslySetInnerHTML={highlightedCode ? { __html: highlightedCode } : { __html: codeString }} />
                );
              },
            },
          },
        }}
      >
        {children}
      </Markdown>
    );
  };

const ChatBot = () => {
  const [messages, setMessages] = useState([]); // Holds the entire conversation
  const [input, setInput] = useState(""); // User input
  const [model, setModel] = useState(null); // LLM model instance
  const [isModelLoading, setIsModelLoading] = useState(true); // Loading the model
  const [isResponding, setIsResponding] = useState(false); // Bot is generating response

  useEffect(() => {
    // Initialize the LLM model
    const initializeModel = async () => {
      try {
        const initProgressCallback = (initProgress) => {
          console.log(initProgress);
        };

        const selectedModel = "Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC";
        const engine = await webllm.CreateMLCEngine(
          selectedModel,
          { initProgressCallback: initProgressCallback } // engineConfig
        );
        setModel(engine);
        setIsModelLoading(false); // Model loaded
      } catch (error) {
        console.error("Error initializing model:", error);
        setIsModelLoading(false); // Stop loading if there's an error
      }
    };

    initializeModel();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the conversation history
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);

    // Store the input locally to maintain the state in case of async updates
    const userMessage = input;
    setInput(""); // Clear the input field

    if (model) {
      setIsResponding(true); // Start loading for response
      try {
        // Create the prompt using the entire conversation history
        const conversationHistory = messages.map((message) => ({
          role: message.sender === "user" ? "user" : "assistant",
          content: message.text,
        }));

        // Include the current input as part of the conversation
        conversationHistory.push({ role: "user", content: userMessage });

        // Generate a response from the model
        const responseStream = await model.chat.completions.create({
          messages: conversationHistory,
          stream: true, // Enable streaming
        });

        // Handle the stream of responses from the model
        if (responseStream && responseStream[Symbol.asyncIterator]) {
          let botResponse = "";
          for await (const chunk of responseStream) {
            if (chunk.choices && chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content) {
              const newContent = chunk.choices[0].delta.content;
              botResponse += newContent;
              setMessages((prevMessages) => {
                const lastMessage = prevMessages[prevMessages.length - 1];
                if (lastMessage && lastMessage.sender === "bot") {
                  // Update the last bot message with the new content
                  return [
                    ...prevMessages.slice(0, -1),
                    { ...lastMessage, text: lastMessage.text + newContent },
                  ];
                } else {
                  // Add a new bot message
                  return [...prevMessages, { text: newContent, sender: "bot" }];
                }
              });
            }
          }
          setIsResponding(false); // Stop showing loading when response is complete
        } else {
          console.error("Response stream is not async iterable");
        }
      } catch (error) {
        console.error("Error generating response:", error);
        setIsResponding(false); // Stop loading on error
      }
    }
  };

  // Function to handle "Enter" key for message sending
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {isModelLoading && <div className="loading-message">Loading model, please wait...</div>} {/* Loading model */}

      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {/* Use the custom MarkdownWithHighlight component */}
            <MarkdownWithHighlight>{message.sender === "user" ? `>> ${message.text}` : `Bot: ${message.text}`}</MarkdownWithHighlight>
          </div>
        ))}
        {isResponding && <div className="loading-message">Bot is typing...</div>} {/* Bot response loading */}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="input-field"
          onKeyDown={handleKeyDown} // Capture Enter key to send message
          disabled={isModelLoading || isResponding} // Disable input while model is loading or bot is responding
        />
        <button
          onClick={handleSendMessage}
          className="send-button"
          disabled={isModelLoading || isResponding} // Disable button while model is loading or bot is responding
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
