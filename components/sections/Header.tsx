import { Github as GitHub } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-lg font-medium">
          Rachit Jasoria
        </a>
        <nav className="flex items-center space-x-8">
          <a href="#home" className="text-sm hover:text-zinc-300 transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm hover:text-zinc-300 transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm hover:text-zinc-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm hover:text-zinc-300 transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/Rachit333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-zinc-300 transition-colors flex items-center gap-2"
          >
            <GitHub size={16} />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
