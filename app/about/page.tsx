import { Navigation } from "../components/nav";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="max-w-2xl mx-auto mt-32 mb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              About Me
            </h1>
            <p className="mt-4 text-zinc-400">
              Get to know more about who I am and what I do
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                👋 Hello, I'm Your Name
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-friendly applications. With several years of experience 
                in web development, I enjoy working with modern technologies and frameworks 
                to bring ideas to life.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                🚀 What I Do
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I specialize in building scalable web applications using cutting-edge 
                technologies. My expertise includes:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Frontend development with React, Next.js, and TypeScript</li>
                <li>Backend development with Node.js, Python, and databases</li>
                <li>UI/UX design and responsive web development</li>
                <li>Cloud deployment and DevOps practices</li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                🎯 My Mission
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                I believe in the power of technology to solve real-world problems and 
                improve people's lives. Every project I work on is an opportunity to 
                learn something new and make a positive impact.
              </p>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
