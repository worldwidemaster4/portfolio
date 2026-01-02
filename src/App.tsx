import { useState } from 'react';
import CLI from './components/CLI';
import TopBar from './components/TopBar';
import RecruiterMode from './modes/RecruiterMode';
import FounderMode from './modes/FounderMode';
import EngineerMode from './modes/EngineerMode';
import DevOpsMode from './modes/DevOpsMode';
import SystemsMode from './modes/SystemsMode';

function App() {
  const [currentMode, setCurrentMode] = useState<string | null>(null);

  const handleModeChange = (mode: string) => {
    setCurrentMode(mode);
  };

  const handleBack = () => {
    setCurrentMode(null);
  };

  if (!currentMode) {
    return <CLI onModeChange={handleModeChange} />;
  }

  return (
    <div className="min-h-screen">
      <TopBar mode={currentMode} onBack={handleBack} />
      {currentMode === 'recruiter' && <RecruiterMode />}
      {currentMode === 'founder' && <FounderMode />}
      {currentMode === 'engineer' && <EngineerMode />}
      {currentMode === 'devops' && <DevOpsMode />}
      {currentMode === 'systems' && <SystemsMode />}
    </div>
  );
}

export default App;
