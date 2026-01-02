import { Mail, Github, Globe } from 'lucide-react';

export default function RecruiterMode() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Vanshit Ahuja</h1>
          <h2 className="text-xl text-gray-600 mb-6">Software Engineer — Backend & Infrastructure</h2>
          <p className="text-lg text-gray-700">
            I build and deploy production-grade systems with a focus on reliability and ownership.
          </p>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">FaultLine</h4>
              <p className="text-gray-700">
                Chaos engineering platform to test system resilience and recovery before production incidents.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Vibe</h4>
              <p className="text-gray-700">
                Scalable social media platform with real-time interactions and optimized feed performance.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Travel Planner</h4>
              <p className="text-gray-700">
                Constraint-aware AI system that generates feasible, optimized travel itineraries.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div>
            <h4 className="text-xl font-semibold mb-1">Signity Software Solutions — SDE Intern → Team Lead</h4>
            <p className="text-gray-700">
              Owned backend services, CI/CD automation, and led an 8-member team.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <div className="flex gap-6">
            <a
              href="mailto:vanshit.ahuja.23cse@bmu.edu.in"
              className="flex items-center gap-2 text-[#38bdf8] hover:underline"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://github.com/vanshitahujaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#38bdf8] hover:underline"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://github.com/vanshitahujaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#38bdf8] hover:underline"
            >
              <Globe className="w-5 h-5" />
              Portfolio
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
