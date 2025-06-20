import React from 'react';
import { Code, Layers, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Languages",
      skills: ["Python", "JavaScript", "C#", "Java"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Frameworks",
      skills: ["React", "Flask", ".NET Core", "Node.js", "TensorFlow" , "PyTorch", "Keras" ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Styling",
      skills: ["Tailwind CSS", "Bootstrap", "Figma"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Tools",
      skills: ["GitHub", "ServiceNow", "Vite"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tech Stack ⚡
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:scale-105 transform"
                    style={{
                      animationDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
