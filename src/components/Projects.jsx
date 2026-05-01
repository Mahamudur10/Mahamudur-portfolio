// components/Projects.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCss3Alt,
    FaJs,
    FaProjectDiagram
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiRedux
} from "react-icons/si";

const Projects = () => {
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

    const projectsData = [
        {
            id: 1,
            title: "Pixgen - AI-Powered Image Generation Platform",
            description: "Powerful browser-based image editing suite with real time filters effects and adjustments. Perfect for quick edits and creative transformations.",
            image: "/pixgen.jpg",
            tech: [
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "Express", icon: SiExpress, color: "text-gray-600" },
            ],
            github: "https://github.com/Mahamudur10/pixgen",
            live: "https://pixgen-delta.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Modern animated portfolio website built with Next.js and Tailwind CSS. Features smooth animations and responsive design.",
            image: "/projects/portfolio.jpg",
            tech: [
                { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
                { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
            ],
            github: "https://github.com/Mahamudur10/portfolio",
            live: "https://mahamudur.dev",
            featured: true
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Task management application with drag-drop functionality, user authentication, and real-time updates.",
            image: "/projects/taskapp.jpg",
            tech: [
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "Firebase", icon: SiFirebase, color: "text-yellow-600" },
                { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
            ],
            github: "https://github.com/Mahamudur10/taskmanager",
            live: "https://taskmanager.demo.com",
            featured: false
        },
        {
            id: 4,
            title: "Blog Platform",
            description: "Full-featured blog platform with markdown support, comments system, and user profiles.",
            image: "/projects/blog.jpg",
            tech: [
                { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" }
            ],
            github: "https://github.com/Mahamudur10/blog",
            live: "https://blog.demo.com",
            featured: false
        }
    ];

    const ProjectCard = ({ project, index }) => {
        return (
            <div
                className={`group transform transition-all duration-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                    }`}
                style={{ transitionDelay: `${index * 150}ms` }}
            >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <FaProjectDiagram className="text-6xl text-blue-300" />
                            </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Featured Badge */}
                        {project.featured && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                ⭐ Featured
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, idx) => {
                                const TechIcon = tech.icon;
                                return (
                                    <div key={idx} className="group/tech relative">
                                        <div className={`w-8 h-8 ${tech.color} bg-opacity-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/tech:scale-110`}>
                                            <TechIcon className={`text-sm ${tech.color}`} />
                                        </div>
                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300"
                            >
                                <FaGithub />
                                Code
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg flex items-center gap-1">
                                <FaProjectDiagram className="text-xl" />
                                My Portfolio
                            </span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Mahamudur10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <FaGithub className="text-xl" />
                        View More on GitHub
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow delay-2000"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;