// components/Skills.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaFigma, FaGitAlt, FaDatabase, FaVuejs, FaAngular, FaPhp,
  FaLaravel, FaDocker, FaAws, FaWordpress
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiExpress,
  SiRedux, SiGraphql, SiJest, SiWebpack, SiVite, SiPostgresql,
  SiRedis, SiFirebase, SiPrisma, SiJquery
} from "react-icons/si";
import { TbBrandReactNative, TbApi } from "react-icons/tb";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillsData = {
    frontend: {
      name: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      skills: [
        { name: "HTML5", level: 95, icon: FaHtml5, color: "text-orange-600" },
        { name: "CSS3", level: 90, icon: FaCss3Alt, color: "text-blue-600" },
        { name: "JavaScript", level: 88, icon: FaJs, color: "text-yellow-600" },
        { name: "TypeScript", level: 75, icon: SiTypescript, color: "text-blue-600" },
        { name: "React.js", level: 85, icon: FaReact, color: "text-cyan-600" },
        { name: "Next.js", level: 80, icon: SiNextdotjs, color: "text-gray-800" },
        { name: "Redux", level: 78, icon: SiRedux, color: "text-purple-600" },
        { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "text-teal-600" },
        { name: "Vue.js", level: 65, icon: FaVuejs, color: "text-green-600" },
        { name: "jQuery", level: 70, icon: SiJquery, color: "text-blue-500" },
      ]
    },
    backend: {
      name: "Backend",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      skills: [
        { name: "Node.js", level: 82, icon: FaNodeJs, color: "text-green-600" },
        { name: "Express.js", level: 78, icon: SiExpress, color: "text-gray-600" },
        { name: "Python", level: 75, icon: FaPython, color: "text-blue-600" },
        { name: "PHP", level: 70, icon: FaPhp, color: "text-indigo-600" },
        { name: "Laravel", level: 68, icon: FaLaravel, color: "text-red-600" },
        { name: "MongoDB", level: 80, icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "text-blue-600" },
        { name: "MySQL", level: 77, icon: FaDatabase, color: "text-blue-600" },
        { name: "Redis", level: 65, icon: SiRedis, color: "text-red-600" },
        { name: "GraphQL", level: 70, icon: SiGraphql, color: "text-pink-600" },
        { name: "REST API", level: 85, icon: TbApi, color: "text-indigo-600" },
        { name: "Prisma", level: 75, icon: SiPrisma, color: "text-teal-600" },
      ]
    },
    tools: {
      name: "DevOps & Tools",
      icon: "🛠️",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      skills: [
        { name: "Git/GitHub", level: 85, icon: FaGitAlt, color: "text-orange-600" },
        { name: "Docker", level: 70, icon: FaDocker, color: "text-blue-600" },
        { name: "AWS", level: 65, icon: FaAws, color: "text-yellow-600" },
        { name: "Firebase", level: 75, icon: SiFirebase, color: "text-yellow-600" },
        { name: "Figma", level: 75, icon: FaFigma, color: "text-purple-600" },
        { name: "Webpack", level: 70, icon: SiWebpack, color: "text-blue-600" },
        { name: "Vite", level: 75, icon: SiVite, color: "text-yellow-600" },
        { name: "Jest", level: 68, icon: SiJest, color: "text-red-600" },
        { name: "WordPress", level: 70, icon: FaWordpress, color: "text-blue-700" },
      ]
    }
  };

  const tabs = [
    { id: "frontend", name: "Frontend", icon: "🎨" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "tools", name: "Tools", icon: "🛠️" }
  ];

  const currentSkills = skillsData[activeTab];

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-blue-600 font-semibold text-base md:text-lg">My Expertise</span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with to build amazing web experiences
          </p>
        </div>

        {/* Tab Buttons - Mobile Friendly */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${skillsData[tab.id].color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-base md:text-xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Responsive */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {currentSkills.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                  isVisible ? "translate-y-0" : "translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${currentSkills.bgColor} rounded-lg md:rounded-xl flex items-center justify-center ${skill.color} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="text-xl md:text-2xl" />
                  </div>
                  
                  {/* Skill Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        {skill.name}
                      </h3>
                      <span className="text-xs md:text-sm font-bold text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${currentSkills.color} transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary - Mobile Friendly */}
        <div className={`mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              30+
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Technologies</p>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              2+
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              15+
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Projects Done</p>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              100%
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;