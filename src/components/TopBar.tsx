interface TopBarProps {
  mode: string;
  onBack: () => void;
}

export default function TopBar({ mode, onBack }: TopBarProps) {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1jDSEfUf8x4FqKc2N1WqLmZ9Tz0rYxP5w/view', '_blank');
  };

  return (
    <div className="bg-[#121826] border-b border-[#1f2937] px-6 py-3 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-6">
        <button
          onClick={onBack}
          className="text-[#38bdf8] hover:underline cursor-pointer"
        >
          ← back
        </button>
        <span className="text-gray-400">
          MODE: <span className="text-white">{mode}</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-gray-400">
          ENV: <span className="text-white">production</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">STATUS:</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
            <span className="text-[#22c55e]">stable</span>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="text-[#38bdf8] hover:underline cursor-pointer"
        >
          download resume
        </button>
      </div>
    </div>
  );
}
