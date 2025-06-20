import { Github, Linkedin, ChevronDown } from 'lucide-react';
import memoji from './memoji.png';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Floating Memoji Image */}
        <div className="mb-8 animate-float">
          <img
            src={memoji} 
            alt="Darshnee Sunderraj Memoji"
            className="w-32 h-32 rounded-full shadow-2xl object-cover border-4 border-white"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in-up">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Darshnee Sunderraj  </span>  !
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-200">
          I build intelligent and aesthetic software — blending code, design & human needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-400">
          <a
            href="https://www.linkedin.com/in/darshneesunderraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
            LinkedIn
          </a>
          <a
            href="https://github.com/darshneesunderraj"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-6 h-6 transition-transform group-hover:scale-110" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
