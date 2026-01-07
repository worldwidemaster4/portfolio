export default function AboutMode() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-[#121826] rounded-3xl p-12 border border-[#1f2937]">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                I'm a backend and infrastructure engineer focused on building systems that are reliable, observable, and production-ready. I believe great engineering means owning the full lifecycle—from design to deployment to recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/20 to-[#06b6d4]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative bg-[#121826] rounded-2xl p-10 border border-[#1f2937] h-full">
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">The Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Started as an intern at Signity Software Solutions, eager to learn how real systems work. Quickly moved from fixing bugs to owning backend services, then leading an 8-person engineering team.
                </p>
                <p>
                  Every project taught me something: FaultLine taught me resilience, Vibe taught me scalability, Travel Planner taught me constraints matter, and my ML work taught me determinism beats magic.
                </p>
                <p>
                  Now I'm building systems that don't just work—they fail gracefully, recover automatically, and tell you when something's wrong before it becomes a crisis.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 to-[#38bdf8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative bg-[#121826] rounded-2xl p-10 border border-[#1f2937] h-full">
              <h2 className="text-2xl font-bold text-[#06b6d4] mb-6">What Drives Me</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="text-[#22c55e] font-semibold">Ownership:</span> I don't just implement features—I own the outcomes. System down? I'm on it. Slow deployment? I fixed it.
                </p>
                <p>
                  <span className="text-[#22c55e] font-semibold">Reliability:</span> A system that works 99.9% of the time is good. A system that fails gracefully and recovers fast is great.
                </p>
                <p>
                  <span className="text-[#22c55e] font-semibold">Simplicity:</span> Complex solutions impress. Simple solutions that work at scale and are maintainable? That's the goal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Backend & Systems",
                skills: ["Node.js", "Express", "FastAPI", "API Design", "Async Workflows", "Performance Optimization"]
              },
              {
                title: "Infrastructure",
                skills: ["Docker", "Docker Compose", "Nginx", "CI/CD Pipelines", "Production Debugging", "Kubernetes Basics"]
              },
              {
                title: "Full Stack",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Real-time Systems"]
              }
            ].map((category) => (
              <div key={category.title} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#38bdf8]/30 to-[#06b6d4]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                <div className="relative bg-[#121826] rounded-2xl p-8 border border-[#1f2937]">
                  <h3 className="text-xl font-bold text-[#38bdf8] mb-6">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: "SDE Intern → Team Lead",
                company: "Signity Software Solutions",
                duration: "2023 - 2024",
                highlights: [
                  "Improved backend request throughput by ~30%",
                  "Automated CI/CD pipelines, reducing release time by ~20%",
                  "Promoted to Team Lead managing an 8-member engineering team",
                  "Owned production delivery and code reviews"
                ]
              },
              {
                role: "Web Developer Intern",
                company: "Bluestock",
                duration: "2023",
                highlights: [
                  "Built responsive React components with TypeScript",
                  "Integrated frontend with secure backend APIs",
                  "Delivered modular, production-ready code"
                ]
              }
            ].map((exp) => (
              <div key={exp.company} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8]/10 to-[#06b6d4]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-[#121826] rounded-xl p-8 border border-[#1f2937]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-[#38bdf8]">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="text-[#22c55e] mt-1">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
