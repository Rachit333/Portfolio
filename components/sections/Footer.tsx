export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-500">
        <p>© 2026 Rachit Jasoria. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Rachit333"
            className="hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rachit-jasoria"
            className="hover:text-zinc-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jasoriarachit@gmail.com"
            className="hover:text-zinc-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
