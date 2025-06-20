import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import library from './library.jpeg'; // ✅ Local image import

// ✅ Define a type for projects
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string;
  github: string;
  demo?: string;
  status: 'completed' | 'in-progress';
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sign Language Detection System',
      description: 'Real-time hand gesture recognition using OpenCV & ML',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Python', 'OpenCV', 'YOLO-NAS', 'ML'],
      details:
        'An innovative real-time sign language detection system that uses computer vision and machine learning to recognize hand gestures. Built with OpenCV for image processing and YOLO-NAS for hand landmark detection, this project bridges communication gaps by translating sign language into text in real-time.',
      github: 'https://github.com/darshneesunderraj/sign-language-detection',
      status: 'completed'
    },
    {
      id: 2,
      title: 'E-Book Vault : Library Management System',
      description: 'Web-based library portal with CRUD, search, and analytics',
      image: library, // ✅ Local image correctly referenced
      tags: ['PHP', 'CSS', 'HTML', 'Bootstrap'],
      details:
        'The E-Book Vault is a library management system that provides users with the ability to explore, download, and manage a wide selection of books at no cost. Users can easily register for an account and log in securely to access their personalized dashboard.',
      github: 'https://github.com/darshneesunderraj/E-Book-Vault',
      status: 'completed'
    },
    {
      id: 3,
      title: 'FinTech Ratio Analyzer',
      description: 'Upload Excel files, analyze key financial ratios for SMEs',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Python', 'Pandas', 'Chart.js', 'React'],
      details:
        'A powerful financial analysis tool designed for Small and Medium Enterprises (SMEs). Users can upload Excel files containing financial data, and the system automatically calculates and visualizes key financial ratios, providing insights for better business decision-making.',
      github: 'https://github.com/darshneesunderraj/fintech-ratio-analyzer',
      status: 'in-progress'
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building innovative solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Progress
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors w-full justify-center"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up transition-all duration-500 scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                {selectedProject.status === 'in-progress' && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full font-semibold">
                      🚧 In Progress
                    </span>
                  </div>
                )}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform hover:bg-gray-700"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  {selectedProject.status === 'completed' && selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
