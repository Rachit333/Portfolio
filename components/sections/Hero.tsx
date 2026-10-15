import { Mail, Github as GitHub, Linkedin, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rachit Jasoria
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Full-Stack Developer & AI Enthusiast. Building AI-powered web applications.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 mb-8 text-sm">
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin size={16} />
              <span>Phagwara, Punjab, India</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Phone size={16} />
              <span>+91 82097-89502</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Mail size={16} />
              <a
                href="mailto:jasoriarachit@gmail.com"
                className="hover:text-zinc-300 transition-colors"
              >
                jasoriarachit@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Globe size={16} />
              <a href="#" className="hover:text-zinc-300 transition-colors">
                rachjasoria.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-4 max-w-xs">
            <a
              href="https://www.linkedin.com/in/rachit-jasoria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-colors text-sm"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Rachit333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-colors text-sm"
            >
              <GitHub size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:jasoriarachit@gmail.com"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-colors text-sm"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="w-48 h-48 rounded-lg bg-zinc-800 overflow-hidden border border-zinc-700">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
