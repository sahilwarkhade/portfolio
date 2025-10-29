import React, { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";

const UbuntuTerminal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const journeyText = `My journey in software development began with a strong curiosity for how technology powers real-world solutions. Over time, this interest evolved into a passion for building scalable systems and user-focused products. During my academic years, I strengthened my fundamentals in data structures, algorithms, databases, and core programming concepts while actively developing projects that challenged my problem-solving capability.

I started gaining industry experience as a Full Stack Developer Intern at AB Infotech Solution, where I worked across both frontend and backend environments. This role helped me understand end-to-end development workflows—from building responsive UIs to designing REST APIs, integrating cloud services, and ensuring smooth deployment. Collaborating with teams and contributing to real client features gave me practical exposure to product thinking, code quality, version control, and agile practices.

Currently, I'm working as a Backend Developer Intern at Technoyug, focusing on backend architectures, system design, authentication flows, database optimizations, and scalable API development. Here, I've learned how backend systems interact with complex business logic, handle security, and maintain performance at scale. Working in a live environment has sharpened my debugging abilities, documentation skills, and understanding of production-level challenges.

Across both roles, I've grown significantly—not just as a developer, but also as a collaborator. I've learned to break down requirements, communicate clearly, iterate on feedback, and deliver reliable solutions on time. My hands-on experience with modern stacks and real-world problem-solving continues to shape my engineering mindset.

Today, I'm driven by the constant pursuit of improvement. I enjoy exploring new technologies, refining system efficiency, and creating solutions that genuinely help users and businesses. As I continue evolving, my goal is to build meaningful, production-ready software that balances performance, usability, and scalability.`;

  useEffect(() => {
    setIsVisible(true);
    setTerminalLines([
      { type: "system", text: "Ubuntu 22.04.3 LTS" },
      { type: "system", text: "Welcome to my developer journey terminal" },
      { type: "system", text: "" },
      { type: "info", text: 'Type "journey" and press Enter to begin...' },
      { type: "system", text: "" },
    ]);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLines]);

  const streamText = async (text) => {
    setIsStreaming(true);
    setShowPrompt(false);

    const words = text.split(" ");
    let currentLine = { type: "output", text: "" };

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (currentLine.text.length + word.length > 80) {
        setTerminalLines((prev) => [...prev, { ...currentLine }]);
        currentLine = { type: "output", text: word + " " };
      } else {
        currentLine.text += word + " ";
      }

      setTerminalLines((prev) => {
        const newLines = [...prev];
        if (newLines[newLines.length - 1]?.type === "output" && i > 0) {
          newLines[newLines.length - 1] = { ...currentLine };
        } else {
          newLines.push({ ...currentLine });
        }
        return newLines;
      });

      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    setTerminalLines((prev) => [...prev, { type: "system", text: "" }]);
    setIsStreaming(false);
    setShowPrompt(true);
    setCurrentCommand("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isStreaming) {
      e.preventDefault();
      const cmd = currentCommand.trim().toLowerCase();

      setTerminalLines((prev) => [
        ...prev,
        { type: "command", text: `developer@portfolio:~$ ${currentCommand}` },
      ]);

      if (cmd === "journey") {
        streamText(journeyText);
      } else if (cmd === "clear") {
        setTerminalLines([]);
        setCurrentCommand("");
      } else if (cmd === "help") {
        setTerminalLines((prev) => [
          ...prev,
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  journey - Display my developer journey" },
          { type: "output", text: "  clear   - Clear terminal" },
          { type: "output", text: "  help    - Show this help message" },
          { type: "system", text: "" },
        ]);
        setCurrentCommand("");
      } else if (cmd) {
        setTerminalLines((prev) => [
          ...prev,
          { type: "error", text: `Command not found: ${cmd}` },
          { type: "output", text: 'Type "help" for available commands' },
          { type: "system", text: "" },
        ]);
        setCurrentCommand("");
      } else {
        setCurrentCommand("");
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="section-journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Journey
            </h2>
          </div>

          {/* Ubuntu Terminal */}
          <div
            className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 cursor-text"
            onClick={handleTerminalClick}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">
                developer@portfolio: ~
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-sm h-96 overflow-y-auto bg-gray-900">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    line.type === "system"
                      ? "text-gray-500"
                      : line.type === "command"
                      ? "text-green-400"
                      : line.type === "error"
                      ? "text-red-400"
                      : line.type === "info"
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {line.text}
                </div>
              ))}

              {showPrompt && !isStreaming && (
                <div className="flex items-center text-green-400 w-full">
                  <span className="mr-2">sahil@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-gray-300 caret-green-400 w-full"
                    autoFocus
                    spellCheck={false}
                  />
                  <span className="animate-pulse">▊</span>
                </div>
              )}

              {isStreaming && (
                <span className="text-green-400 animate-pulse">▊</span>
              )}

              <div ref={terminalEndRef} />
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-4 text-center">
            💡 Tip: Type "help" to see available commands
          </p>
        </div>
      </div>
    </section>
  );
};

export default UbuntuTerminal;
