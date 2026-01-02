import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function EngineerMode() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="space-y-6">
          <div className="border border-[#1f2937] bg-[#121826] rounded-lg">
            <button
              onClick={() => toggleSection('faultline')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1f2937] transition-colors"
            >
              <h2 className="text-2xl font-bold">FaultLine — System Design</h2>
              {expandedSections['faultline'] ? (
                <ChevronDown className="w-6 h-6 text-[#38bdf8]" />
              ) : (
                <ChevronRight className="w-6 h-6 text-[#38bdf8]" />
              )}
            </button>

            {expandedSections['faultline'] && (
              <div className="px-6 pb-6 space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Docker-based service orchestration</li>
                  <li>Failure injection: crash, latency, memory pressure</li>
                  <li>Recovery detection via health polling</li>
                  <li>Metrics: MTTR, stability windows</li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#1f2937]">
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Tradeoffs:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>JSON persistence chosen for simplicity</li>
                    <li>Polling used over events for determinism</li>
                  </ul>
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/vanshitahujaa/FaultLine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://hub.docker.com/r/vanshahuja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline"
                  >
                    Docker Hub →
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="border border-[#1f2937] bg-[#121826] rounded-lg">
            <button
              onClick={() => toggleSection('vibe')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1f2937] transition-colors"
            >
              <h2 className="text-2xl font-bold">Vibe — Architecture Notes</h2>
              {expandedSections['vibe'] ? (
                <ChevronDown className="w-6 h-6 text-[#38bdf8]" />
              ) : (
                <ChevronRight className="w-6 h-6 text-[#38bdf8]" />
              )}
            </button>

            {expandedSections['vibe'] && (
              <div className="px-6 pb-6 space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Cursor-based infinite scrolling</li>
                  <li>Optimized feed queries</li>
                  <li>Real-time updates via sockets</li>
                </ul>

                <div className="mt-4">
                  <a
                    href="https://vibe-social-media-application.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="border border-[#1f2937] bg-[#121826] rounded-lg">
            <button
              onClick={() => toggleSection('travel')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1f2937] transition-colors"
            >
              <h2 className="text-2xl font-bold">Travel Planner — Algorithmic Design</h2>
              {expandedSections['travel'] ? (
                <ChevronDown className="w-6 h-6 text-[#38bdf8]" />
              ) : (
                <ChevronRight className="w-6 h-6 text-[#38bdf8]" />
              )}
            </button>

            {expandedSections['travel'] && (
              <div className="px-6 pb-6 space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Constraint Satisfaction for feasibility</li>
                  <li>A* for optimization</li>
                  <li>Deterministic outputs</li>
                </ul>

                <div className="mt-4">
                  <a
                    href="https://travel-planner-seven-rouge.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="border border-[#1f2937] bg-[#121826] rounded-lg">
            <button
              onClick={() => toggleSection('glaucoma')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1f2937] transition-colors"
            >
              <h2 className="text-2xl font-bold">Glaucoma Detection — ML System</h2>
              {expandedSections['glaucoma'] ? (
                <ChevronDown className="w-6 h-6 text-[#38bdf8]" />
              ) : (
                <ChevronRight className="w-6 h-6 text-[#38bdf8]" />
              )}
            </button>

            {expandedSections['glaucoma'] && (
              <div className="px-6 pb-6 space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Deep learning inference with explainability</li>
                  <li>FastAPI backend with Docker deployment</li>
                  <li>Production-ready medical ML workflow</li>
                </ul>

                <div className="mt-4">
                  <a
                    href="https://github.com/vanshitahujaa/glaucoma-detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
