// components/About.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaUserGraduate, FaCode, FaRocket, FaHeart } from "react-icons/fa";

const About = () => {
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

    return (
        <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg">Get to Know Me</span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image Rectangle (আগের স্টাইল) */}
                    <div className={`relative transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                        }`}>
                        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
                            <Image
                                src="/mahamudur.png"
                                alt="Mahamudur"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -z-10 animate-pulse-slow"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full -z-10 animate-bounce-slow"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-6 transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                        }`}>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            I'm <span className="font-bold text-blue-600">Mahamudur</span>, a passionate web developer
                            dedicated to creating beautiful and functional web applications.
                            I love turning complex problems into simple, elegant solutions.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            My journey in web development started with curiosity and has grown
                            into a full-blown passion. I constantly learn new technologies and
                            best practices to stay up-to-date with the ever-evolving web landscape.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <FaUserGraduate className="text-3xl text-blue-600 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-800">Student</h4>
                                <p className="text-sm text-gray-500">BSc in CSE</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <FaCode className="text-3xl text-purple-600 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-800">Developer</h4>
                                <p className="text-sm text-gray-500">Full-Stack</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <FaRocket className="text-3xl text-pink-600 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-800">Freelancer</h4>
                                <p className="text-sm text-gray-500">Available</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <FaHeart className="text-3xl text-red-500 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-800">Learner</h4>
                                <p className="text-sm text-gray-500">Always Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;