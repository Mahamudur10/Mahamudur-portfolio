// components/Education.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
    FaGraduationCap,
    FaUniversity,
    FaSchool,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaAward,
    FaStar,
    FaTrophy
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

const Education = () => {
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

    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            institution: "Bangladesh University",
            location: "Dhaka, Bangladesh",
            period: "2022 - Present",
            grade: "CGPA: 3.50 / 4.00",
            achievements: ["Dean's List Award", "Scholarship Recipient"],
            icon: FaGraduationCap,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Savar Govt College",
            location: "Savar, Dhaka",
            period: "2019 - 2021",
            grade: "GPA: 4.67 / 5.00",
            achievements: ["Science Group", "Merit Position"],
            icon: MdOutlineSchool,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
            iconColor: "text-purple-600"
        },
        {
            id: 3,
            degree: "Secondary School Certificate (SSC)",
            institution: "Anjana Model High School",
            location: "Dhaka, Bangladesh",
            period: "2017 - 2019",
            grade: "GPA: 4.56 / 5.00",
            achievements: ["Science Group", "Golden GPA"],
            icon: FaSchool,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            iconColor: "text-green-600"
        }
    ];

    const EducationCard = ({ edu, index }) => {
        const IconComponent = edu.icon;

        return (
            <div
                className={`transform transition-all duration-700 ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-16 opacity-0"
                    }`}
                style={{ transitionDelay: `${index * 200}ms` }}
            >
                <div className="group relative">
                    {/* Timeline Connector */}
                    {index !== educationData.length - 1 && (
                        <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
                    )}

                    {/* Card */}
                    <div className={`relative ml-0 md:ml-12 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${edu.borderColor} hover:-translate-y-2`}>

                        {/* Icon Circle - Desktop */}
                        <div className="absolute -left-8 top-6 hidden md:flex items-center justify-center">
                            <div className={`w-12 h-12 ${edu.bgColor} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                                <IconComponent className={`text-2xl ${edu.iconColor} group-hover:scale-110 transition-transform`} />
                            </div>
                        </div>

                        {/* Mobile Icon */}
                        <div className="md:hidden flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 ${edu.bgColor} rounded-full flex items-center justify-center`}>
                                <IconComponent className={`text-xl ${edu.iconColor}`} />
                            </div>
                            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-200 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            {/* Degree */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {edu.degree}
                            </h3>

                            {/* Institution with Icon */}
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaUniversity className="text-sm text-gray-500" />
                                <span className="font-semibold">{edu.institution}</span>
                            </div>

                            {/* Location & Period */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-xs" />
                                    <span>{edu.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaCalendarAlt className="text-xs" />
                                    <span>{edu.period}</span>
                                </div>
                            </div>

                            {/* Grade with Award Icon */}
                            <div className="inline-block">
                                <div className={`px-3 py-1 ${edu.bgColor} rounded-full text-sm font-semibold ${edu.iconColor}`}>
                                    <FaAward className="inline mr-1 text-xs" />
                                    {edu.grade}
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div className="pt-2">
                                <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                                    <FaTrophy className="text-yellow-500 text-xs" />
                                    Key Achievements:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-xs px-3 py-1 ${edu.bgColor} rounded-full text-gray-700 flex items-center gap-1`}
                                        >
                                            <FaStar className={`text-xs ${edu.iconColor}`} />
                                            {achievement}
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
        <section id="education" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-down">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg flex items-center gap-1">
                                <GiDiploma className="text-xl" />
                                Academic Journey
                            </span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        My educational background and academic achievements
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden md:block"></div>

                    {/* Education Cards */}
                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <EducationCard key={edu.id} edu={edu} index={index} />
                        ))}
                    </div>
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

export default Education;