import { useContext, useState } from "react";

import { Context } from "@/context";

function Terminal() {
  const { username } = useContext(Context);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = input.trim();
      const result = executeCommand(command);
      if (result == "clear") {
        setOutput([]);
      } else {
        setOutput([...output, { command, result }]);
      }
      setInput("");
    }
  };

  const executeCommand = (command) => {
    const [commandName, ...args] = command.split(" ");

    switch (commandName.toLowerCase()) {
      case "":
        return "";
      case "echo":
        return args.join(" ");
      case "clear":
        return "clear";
      default:
        return `Invalid command: ${command}`;
    }
  };

  return (
    <div className="rounded-b-md text-gray-300 w-full h-full overflow-hidden">
      <div className="w-full text-base">
        {output.map((item, index) => (
          <div key={index}>
            <span className="text-lime-500">
              {username}@EOS:<span className="text-blue-400">~</span>$
            </span>
            <span className="pl-2">{item.command}</span>
            <br />
            {item.result}
          </div>
        ))}
      </div>

      <div className="flex">
        <span className="text-lime-500">
          {username}@EOS:<span className="text-blue-400">~</span>$
        </span>
        <input
          type="text"
          className="pl-2 bg-transparent outline-none w-full text-base"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
export default Terminal;
