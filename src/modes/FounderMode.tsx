export default function FounderMode() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <section className="mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            I take responsibility for systems that need to run reliably, not just look good.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Solve</h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="text-[#38bdf8] mr-3">•</span>
              Systems breaking under load
            </li>
            <li className="flex items-start">
              <span className="text-[#38bdf8] mr-3">•</span>
              Deployments that fail silently
            </li>
            <li className="flex items-start">
              <span className="text-[#38bdf8] mr-3">•</span>
              Features shipped without resilience thinking
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I've Shipped</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#38bdf8] mb-2">FaultLine</h3>
              <p className="text-lg text-gray-300">
                Reduced unknown failure risk by making recovery behavior observable.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#38bdf8] mb-2">Vibe</h3>
              <p className="text-lg text-gray-300">
                Designed for high-read workloads and real-time usage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#38bdf8] mb-2">Travel Planner</h3>
              <p className="text-lg text-gray-300">
                Eliminated invalid AI outputs using constraint-safe planning.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">What I Can Own</h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="text-[#22c55e] mr-3">✓</span>
              Backend systems
            </li>
            <li className="flex items-start">
              <span className="text-[#22c55e] mr-3">✓</span>
              Deployment pipelines
            </li>
            <li className="flex items-start">
              <span className="text-[#22c55e] mr-3">✓</span>
              Reliability and recovery
            </li>
            <li className="flex items-start">
              <span className="text-[#22c55e] mr-3">✓</span>
              Technical decision-making
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
