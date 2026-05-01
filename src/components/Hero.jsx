// components/Hero.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Hero = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Frontend Developer", "React Expert", "UI Designer", "Problem Solver"];

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[loopNum % words.length];
            const currentText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(currentText);

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
                setTypingSpeed(150);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            } else {
                setTypingSpeed(isDeleting ? 50 : 100);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Mahamudur10",
            icon: FaGithub,
            color: "hover:bg-gray-800"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mahamudur-rahman10/",
            icon: FaLinkedinIn,
            color: "hover:bg-blue-700"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/mahamudur100/",
            icon: FaInstagram,
            color: "hover:bg-pink-600"
        }
    ];

    return (

        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <div className="space-y-6 animate-fade-in-left">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-xl">Hi There,</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Mahamudur
                            </span>
                        </h1>

                        <div className="text-3xl md:text-4xl font-bold">
                            <span className="text-gray-800">I Am Into </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 border-r-4 border-blue-600 pr-1 animate-blink">
                                {text}
                            </span>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Passionate web developer with expertise in creating modern,
                            responsive, and user-friendly websites. I turn ideas into reality
                            through clean code and creative design.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/#contact"
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Hire Me
                            </Link>
                            <Link
                                href="/#projects"
                                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                                View Work
                            </Link>
                        </div>

                        <div className="pt-6">
                            <p className="text-gray-700 text-sm mb-3 font-semibold">Follow me on</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative w-12 h-12 bg-white rounded-full flex items-center justify-center ${social.color} text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl border border-gray-200`}
                                    >
                                        <social.icon className="text-xl" />
                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Optimized Image Section */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative animate-float">
                            {/* Gradient Background Circle */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>

                            {/* Image Container - Adjusted with overflow-hidden and alignment */}
                            <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-end justify-center">
                                <Image
                                    src="/mahamudur.png"
                                    alt="Mahamudur"
                                    fill
                                    // object-contain ব্যবহার করা হয়েছে যাতে শরীর সার্কেলের ভেতর থাকে 
                                    // scale-110 দিয়ে হালকা জুম করা হয়েছে এবং translate-y-4 দিয়ে নিচে নামানো হয়েছে
                                    className="object-contain transform scale-130 translate-y-4"
                                    priority
                                    sizes="(max-width: 768px) 320px, 380px"
                                />
                            </div>

                            {/* Decorative Bubbles */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full -z-10 animate-bounce-slow opacity-70"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full -z-10 animate-bounce-slow delay-1000 opacity-70"></div>

                            {/* Floating Status Badge */}
                            <div className="absolute top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-pulse-slow border border-blue-100">
                                <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                    Available
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;