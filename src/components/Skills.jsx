// components/Skills.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaFigma,
    FaGitAlt,
    FaDatabase,
    FaVuejs,
    FaAngular,
    FaPhp,
    FaLaravel,
    FaDocker,
    FaAws,
    FaWordpress
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiRedux,
    SiGraphql,
    SiJest,
    SiWebpack,
    SiVite,
    SiPostgresql,
    SiRedis,
    SiFirebase
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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
            title: "Frontend Development",
            icon: "🎨",
            color: "from-blue-500 to-cyan-500",
            skills: [
                { name: "HTML5", icon: FaHtml5, level: 95, color: "from-orange-500 to-red-500", bgColor: "bg-orange-100", textColor: "text-orange-600" },
                { name: "CSS3", icon: FaCss3Alt, level: 90, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "JavaScript", icon: FaJs, level: 88, color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
                { name: "TypeScript", icon: SiTypescript, level: 75, color: "from-blue-600 to-blue-800", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "React", icon: FaReact, level: 85, color: "from-cyan-500 to-blue-500", bgColor: "bg-cyan-100", textColor: "text-cyan-600" },
                { name: "Next.js", icon: SiNextdotjs, level: 80, color: "from-gray-700 to-gray-900", bgColor: "bg-gray-100", textColor: "text-gray-700" },
                { name: "Redux", icon: SiRedux, level: 78, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-100", textColor: "text-purple-600" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "from-teal-400 to-cyan-500", bgColor: "bg-teal-100", textColor: "text-teal-600" },
                { name: "Vue.js", icon: FaVuejs, level: 65, color: "from-green-500 to-emerald-600", bgColor: "bg-green-100", textColor: "text-green-600" },
            ]
        },
        backend: {
            title: "Backend & Database",
            icon: "⚙️",
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "Node.js", icon: FaNodeJs, level: 82, color: "from-green-600 to-green-700", bgColor: "bg-green-100", textColor: "text-green-600" },
                { name: "Express.js", icon: SiExpress, level: 78, color: "from-gray-600 to-gray-800", bgColor: "bg-gray-100", textColor: "text-gray-700" },
                { name: "Python", icon: FaPython, level: 75, color: "from-blue-600 to-indigo-600", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "PHP", icon: FaPhp, level: 70, color: "from-indigo-500 to-purple-600", bgColor: "bg-indigo-100", textColor: "text-indigo-600" },
                { name: "Laravel", icon: FaLaravel, level: 68, color: "from-red-500 to-orange-600", bgColor: "bg-red-100", textColor: "text-red-600" },
                { name: "MongoDB", icon: SiMongodb, level: 80, color: "from-green-500 to-emerald-600", bgColor: "bg-green-100", textColor: "text-green-600" },
                { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "from-blue-500 to-indigo-600", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "MySQL", icon: FaDatabase, level: 77, color: "from-blue-500 to-blue-700", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "Redis", icon: SiRedis, level: 65, color: "from-red-500 to-red-700", bgColor: "bg-red-100", textColor: "text-red-600" },
                { name: "GraphQL", icon: SiGraphql, level: 70, color: "from-pink-500 to-purple-600", bgColor: "bg-pink-100", textColor: "text-pink-600" },
            ]
        },
        tools: {
            title: "DevOps & Tools",
            icon: "🛠️",
            color: "from-green-500 to-teal-500",
            skills: [
                { name: "Git", icon: FaGitAlt, level: 85, color: "from-orange-600 to-red-600", bgColor: "bg-orange-100", textColor: "text-orange-600" },
                { name: "Docker", icon: FaDocker, level: 70, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "AWS", icon: FaAws, level: 65, color: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
                { name: "Firebase", icon: SiFirebase, level: 75, color: "from-yellow-500 to-orange-600", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
                { name: "Figma", icon: FaFigma, level: 75, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-100", textColor: "text-purple-600" },
                { name: "Webpack", icon: SiWebpack, level: 70, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100", textColor: "text-blue-600" },
                { name: "Vite", icon: SiVite, level: 75, color: "from-yellow-500 to-purple-500", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
                { name: "Jest", icon: SiJest, level: 68, color: "from-red-500 to-yellow-600", bgColor: "bg-red-100", textColor: "text-red-600" },
            ]
        }
    };

    const SkillCard = ({ skill, index, categoryColor }) => {
        const [isHovered, setIsHovered] = useState(false);
        const ProgressIcon = skill.icon;

        return (
            <div
                className="group relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
            >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group-hover:border-transparent">

                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 ${skill.bgColor} rounded-xl flex items-center justify-center ${skill.textColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                <ProgressIcon className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-500">Skill Level</p>
                            </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` }}>
                            {skill.level}%
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                        <div className="overflow-hidden h-3 rounded-full bg-gray-200">
                            <div
                                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${isVisible ? "translate-x-0" : "-translate-x-full"
                                    } relative`}
                                style={{
                                    width: isVisible ? `${skill.level}%` : "0%",
                                    transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                                }}
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                        </div>
                    </div>

                    {/* Level Badge */}
                    <div className="mt-3">
                        <span className={`text-xs px-2 py-0.5 ${skill.bgColor} ${skill.textColor} rounded-full`}>
                            {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
                        </span>
                    </div>

                    {/* Hover Tooltip */}
                    {isHovered && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-fade-in-up z-20 shadow-xl">
                            🚀 {skill.name} - {skill.level}% Mastery
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with Animation */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                <span className="text-2xl">💪</span>
                                My Expertise
                            </span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        I specialize in modern web technologies and constantly update my skills
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-20">
                    {Object.entries(skillsData).map(([key, category], categoryIndex) => (
                        <div
                            key={key}
                            className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                                }`}
                            style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                        >
                            {/* Category Header with Gradient Icon */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                                    <span className="text-2xl">{category.icon}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {category.title}
                                </h3>
                                <div className="flex-grow h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>

                            {/* Skills Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {category.skills.map((skill, idx) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={idx}
                                        categoryColor={category.color}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill Summary Stats */}
                <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                    }`}>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {Object.values(skillsData).reduce((acc, cat) => acc + cat.skills.length, 0)}+
                        </div>
                        <p className="text-gray-600 text-sm">Technologies</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            2+
                        </div>
                        <p className="text-gray-600 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                            10+
                        </div>
                        <p className="text-gray-600 text-sm">Projects Completed</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                            100%
                        </div>
                        <p className="text-gray-600 text-sm">Client Satisfaction</p>
                    </div>
                </div>

                {/* Floating Animated Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;