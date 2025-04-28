"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Github as GitHub,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Aryus Kumar Samal
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "training",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === item
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "training",
                "education",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === item
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Aryus Kumar Samal</span>
                </h1>
                <p className="text-xl md:text-xl text-muted-foreground mb-8">
                  Computer Science Student & Data Science Enthusiast
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => window.open("/ShanyanCV.pdf", "_blank")}
                  >
                    View Resume
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                  </Button>
                </div>
                <div className="flex mt-8 space-x-4">
                  <a
                    href="https://www.linkedin.com/in/aryus-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/aryuskumar1122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GitHub size={24} />
                  </a>
                  <a
                    href="mailto:aryuskuamr1122@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 md:w-90 md:h-90 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <ChevronDown size={24} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                I&apos;m Aryus Kumar Samal, a Computer Science and Engineering
                student at Lovely Professional University with a focus on Data
                Structures, Algorithms, Software Development, and Machine
                Learning.
              </p>
              <p className="text-lg mb-6">
                My expertise includes Java and Python programming, with hands-on
                experience in frameworks like PyTorch, TensorFlow, Spring, and
                Hibernate. I&apos;ve worked on Machine Learning projects,
                Natural Language Processing tasks, and Full-Stack Web
                Development.
              </p>

              <p className="text-lg">
                I&apos;m highly adaptive, collaborative, and continuously
                upgrading my skills to match industry standards. My goal is to
                contribute to cutting-edge technology projects and bridge the
                gap between theory and practical applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Programming Languages
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Python</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Java</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Html & CSS</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>SQL</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tools & Platforms */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Tools & Platforms
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>MySQL</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Machine Learning</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Tableau</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Excel</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Docker</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Jenkins</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Soft Skills */}
                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Team Player</h4>
                        <p className="text-sm text-muted-foreground">
                          Excellent collaboration and communication in group
                          projects
                        </p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Adaptability</h4>
                        <p className="text-sm text-muted-foreground">
                          Quick to learn and adapt to new technologies and
                          situations
                        </p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Time Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Efficient in handling multiple tasks and meeting
                          deadlines
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Image
                    src="/bird.png"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cube Game</h3>
                  <p className="text-muted-foreground mb-4">
                    Developed a 3D cube game using Unity and C# scripts,
                    showcasing my skills in game development and designing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      TensorFlow
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Librosa
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://github.com/aryuskumar1122"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Image
                    src="/quality1.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    StreamNest - Movie Streaming Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A full-stack video streaming website with secure
                    authentication, efficient video management, and upcoming
                    content-based recommender system.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      JavaScript
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Servlet
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Prisma
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://github.com/aryuskumar1122"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Image
                    src="/crimedata.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    GrindX - Study Tracker & Recommender
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    An intelligent study tracking dashboard with live updates,
                    shareable reports, and a hybrid personalized recommendation
                    system powered by ML and NLP.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      PyTorch
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      NLP
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://github.com/aryuskumar1122"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section id="training" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Training & Certificates
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* GeeksforGeeks Training */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold">
                        Data Structures and Algorithms
                      </h3>
                      <p className="text-muted-foreground">
                        Jun &apos;24 – Aug &apos;24
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-2">GeeksforGeeks</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Developed an efficient Sudoku solver using the
                        Backtracking algorithm with Java.
                      </li>
                    </ul>
                    <div className="flex justify-end">
                      <a
                        href="/gfg.pdf"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View Certificate <ExternalLink size={16} />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Supervised Machine Learning: Regression and
                        Classification
                      </h3>
                      <p className="text-muted-foreground mb-2">Coursera</p>
                      <p className="text-sm mb-4">Issued: Feb &apos;25</p>
                      <div className="flex justify-end">
                        <a
                          href="/SMLRC.pdf"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          View Certificate <ExternalLink size={16} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Complete Data Structures and Algorithms
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        GeeksForGeeks{" "}
                      </p>
                      <p className="text-sm mb-4">Issued: Jan &apos;23</p>
                      <div className="flex justify-end">
                        <a
                          href="/DAT.pdf"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          View Certificate <ExternalLink size={16} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor of Technology - Computer Science and Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    Lovely Professional University, Punjab
                  </p>
                  <p className="text-sm">2022 - present</p>
                  <p className="mt-2">CGPA: 7.75</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Intermediate</h3>
                  <p className="text-muted-foreground">
                    Kendriya Vidyalaya Hissar Cantt, Haryana
                  </p>
                  <p className="text-sm">2020 - 2022</p>
                  <p className="mt-2">Percentage: 91%</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Matriculation</h3>
                  <p className="text-muted-foreground">
                    Kendriya Vidyalaya Hissar Cantt, Haryana
                  </p>
                  <p className="text-sm">2019 - 2020</p>
                  <p className="mt-2">Percentage: 84%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Get In Touch</h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p>aryuskuamr1122@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Linkedin className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            LinkedIn
                          </p>
                          <a
                            href="linkedin.com/in/aryus-kumar"
                            className="hover:text-primary"
                          >
                            linkedin.com/in/aryus-kumar
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <GitHub className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            GitHub
                          </p>
                          <a
                            href="github.com/aryuskumar1122"
                            className="hover:text-primary"
                          >
                            github.com/aryuskumar1122
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Send a Message</h3>

                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 border rounded-md bg-background"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 border rounded-md bg-background"
                          placeholder="Your Email"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-2 border rounded-md bg-background"
                          placeholder="Your Message"
                        ></textarea>
                      </div>

                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Aryus Kumar Samal. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shanyan-sood-6b4732325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/aryuskumar1122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHub size={20} />
              </a>
              <a
                href="mailto:shanyansood862@gmai.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
