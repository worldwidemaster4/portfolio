import { useState, useRef, useEffect } from 'react';

interface CLIProps {
  onModeChange: (mode: string) => void;
}

export default function CLI({ onModeChange }: CLIProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory([...history, `vanshit@portfolio:~$ ${cmd}`]);

    if (trimmed === 'help') {
      setHistory(prev => [...prev,
        '',
        'Available modes:',
        '  recruiter   fast overview for hiring',
        '  founder     ownership & business impact',
        '  engineer    architecture & tradeoffs',
        '  devops      infra, CI/CD, reliability',
        '  systems     failures & postmortems',
        '',
        'Usage:',
        '  mode <name>',
        ''
      ]);
    } else if (trimmed.startsWith('mode ')) {
      const mode = trimmed.substring(5).trim();
      const validModes = ['recruiter', 'founder', 'engineer', 'devops', 'systems'];

      if (validModes.includes(mode)) {
        onModeChange(mode);
      } else {
        setHistory(prev => [...prev, `Error: Unknown mode "${mode}". Type "help" for available modes.`, '']);
      }
    } else if (trimmed === 'clear') {
      setHistory([]);
    } else if (trimmed === '') {
      setHistory(prev => [...prev, '']);
    } else {
      setHistory(prev => [...prev, `Command not found: ${cmd}. Type "help" for available commands.`, '']);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0b0f14] text-white font-mono p-8 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto">
        {history.length === 0 && (
          <div className="mb-4">
            <div className="text-[#38bdf8] mb-2">vanshit@portfolio:~$</div>
            <div className="text-gray-400">Type `help` to get started</div>
            <div className="mt-4"></div>
          </div>
        )}

        {history.map((line, i) => (
          <div key={i} className={line.startsWith('vanshit@portfolio') ? 'text-[#38bdf8]' : 'text-gray-300'}>
            {line}
          </div>
        ))}

        <div className="flex items-center mt-2">
          <span className="text-[#38bdf8] mr-2">vanshit@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-white"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
