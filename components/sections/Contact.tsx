import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-8 text-center">
      <p className="text-zinc-400 mb-6">Want to work together?</p>
      <a href="mailto:jasoriarachit@gmail.com">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get in Touch
        </Button>
      </a>
    </section>
  );
}
