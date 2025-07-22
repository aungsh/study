import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="text-6xl font-bold text-stone-300/30 select-none">
            STUDY TOOLS
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://github.com/aungsh"
            className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center hover:bg-stone-400 transition-colors"
            aria-label="View our GitHub"
          >
            <Github size={20} className="text-stone-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/aung-swan-htat-bb425a1a9/"
            className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center hover:bg-stone-400 transition-colors"
            aria-label="View our LinkedIn"
          >
            <Linkedin size={20} className="text-stone-600" />
          </a>
        </div>
      </div>

      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="font-bold leading-none text-center select-none pointer-events-none whitespace-nowrap max-w-full"
          style={{
            fontSize: "clamp(4rem, 40vw, 30rem)",
            background: "linear-gradient(to bottom, #262626 0%, #e7e5e4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.3,
          }}
        >
          AUNGSH
        </div>
      </div>
    </footer>
  );
}
