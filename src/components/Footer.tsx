
import { Github, Linkedin, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-gray-400 text-lg flex items-center gap-2 flex-wrap justify-center">
            Made with 
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            & 
            <Coffee className="w-5 h-5 text-amber-400" />
            caffeine | Chennai | 2025
          </p>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mt-4">
            ©  Darshnee Sunderraj.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;