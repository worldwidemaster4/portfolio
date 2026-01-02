export default function SystemsMode() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="space-y-12">
          <div className="border-l-4 border-[#ef4444] pl-6">
            <h2 className="text-2xl font-bold mb-6">Failure Story 1</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#f59e0b] mb-2">Symptom:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Container restarts not detected</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#ef4444] mb-2">Root Cause:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Health checks misconfigured</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Fix:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Added stability window validation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-2">Lesson:</h3>
                <p className="text-gray-300 italic">Recovery ≠ restart</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#ef4444] pl-6">
            <h2 className="text-2xl font-bold mb-6">Failure Story 2</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#f59e0b] mb-2">Symptom:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Feed latency spike</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#ef4444] mb-2">Root Cause:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Unbounded queries</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Fix:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Cursor-based pagination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-2">Lesson:</h3>
                <p className="text-gray-300 italic">
                  Scalability must be designed in from the start, not retrofitted.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#ef4444] pl-6">
            <h2 className="text-2xl font-bold mb-6">Failure Story 3</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#f59e0b] mb-2">Symptom:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>CI/CD pipeline taking 20+ minutes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#ef4444] mb-2">Root Cause:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>No build caching, redundant dependency installs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Fix:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Implemented layer caching and parallel job execution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-2">Lesson:</h3>
                <p className="text-gray-300 italic">
                  Developer velocity is a feature. Slow pipelines break iteration cycles.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#ef4444] pl-6">
            <h2 className="text-2xl font-bold mb-6">Failure Story 4</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#f59e0b] mb-2">Symptom:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>AI travel planner generating overlapping schedules</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#ef4444] mb-2">Root Cause:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>No constraint validation on LLM outputs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Fix:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  <li>Implemented constraint satisfaction + A* optimization layer</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-2">Lesson:</h3>
                <p className="text-gray-300 italic">
                  AI is not magic. Deterministic validation is still required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
