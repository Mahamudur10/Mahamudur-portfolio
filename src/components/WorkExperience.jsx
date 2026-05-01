// components/WorkExperience.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
    FaBriefcase,
    FaCode,
    FaLaptopCode,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaStar
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const WorkExperience = () => {
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

    const workData = [
        {
            id: 1,
            title: "Freelance Web Developer",
            company: "Self-Employed / Fiverr",
            location: "Remote",
            period: "2023 - Present",
            type: "Freelance",
            description: [
                "Developed 10+ responsive websites for international clients",
                "Specialized in React.js, Next.js, and Tailwind CSS",
                "Maintained 98% client satisfaction rate",
                "Delivered projects within tight deadlines"
            ],
            technologies: ["React", "Next.js", "Tailwind", "Node.js"],
            icon: FaLaptopCode,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            title: "Open Source Contributor",
            company: "GitHub Open Source",
            location: "Global",
            period: "2024 - Present",
            type: "Volunteer",
            description: [
                "Contributed to popular open source repositories",
                "Fixed bugs and improved documentation",
                "Collaborated with developers worldwide",
                "Learned industry best practices"
            ],
            technologies: ["Git", "GitHub", "JavaScript", "Documentation"],
            icon: FaCode,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            id: 3,
            title: "Personal Projects",
            company: "Portfolio & Learning",
            location: "Self-Paced",
            period: "2022 - Present",
            type: "Learning",
            description: [
                "Built multiple full-stack web applications",
                "Created this portfolio website from scratch",
                "Practiced modern web development technologies",
                "Continuous learning and skill improvement"
            ],
            technologies: ["Next.js", "MongoDB", "Express", "Firebase"],
            icon: GiSkills,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        }
    ];

    const WorkCard = ({ work, index }) => {
        const IconComponent = work.icon;

        return (
            <div
                className={`transform transition-all duration-700 ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-16 opacity-0"
                    }`}
                style={{ transitionDelay: `${index * 200}ms` }}
            >
                <div className="group h-full">
                    <div className={`relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${work.bgColor} hover:-translate-y-2 h-full`}>

                        {/* Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 ${work.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                                <IconComponent className={`text-2xl ${work.iconColor}`} />
                            </div>
                            <div>
                                <span className={`text-xs font-semibold px-2 py-1 ${work.bgColor} ${work.iconColor} rounded-full`}>
                                    {work.type}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {work.title}
                            </h3>

                            <div className="flex items-center gap-2 text-gray-700">
                                <FaBriefcase className="text-sm text-gray-500" />
                                <span className="font-semibold">{work.company}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-xs" />
                                    <span>{work.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCalendarAlt className="text-xs" />
                                    <span>{work.period}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="space-y-2 pt-2">
                                {work.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <FaStar className={`text-xs mt-1 ${work.iconColor}`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="pt-3">
                                <div className="flex flex-wrap gap-2">
                                    {work.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-xs px-2 py-1 ${work.bgColor} rounded-full text-gray-700 font-medium`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="work" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg flex items-center gap-1">
                                <MdWorkOutline className="text-xl" />
                                My Journey
                            </span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Work & Experience
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        My professional journey, freelance work, and personal projects
                    </p>
                </div>

                {/* Work Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workData.map((work, index) => (
                        <WorkCard key={work.id} work={work} index={index} />
                    ))}
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

export default WorkExperience;