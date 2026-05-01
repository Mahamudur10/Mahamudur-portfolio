// components/Footer.jsx
"use client";

import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaHeart,
    FaRocket,
    FaCode
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Education", href: "/#education" },
        { name: "Work", href: "/#work" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];

    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/Mahamudur10", color: "hover:bg-gray-800", label: "GitHub" },
        { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mahamudur-rahman10/", color: "hover:bg-blue-700", label: "LinkedIn" },
        { icon: FaInstagram, url: "https://www.instagram.com/mahamudur100/", color: "hover:bg-pink-600", label: "Instagram" },
        { icon: FaEnvelope, url: "mailto:mahamudur@example.com", color: "hover:bg-red-500", label: "Email" },
    ];

    const services = [
        "Web Development",
        "Frontend Design",
        "Responsive Design",
        "UI/UX Design",
        "SEO Optimization",
        "Performance Tuning",
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1 - Brand & Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <FaCode className="text-white text-xl" />
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Mahamudur
                            </h2>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Passionate web developer dedicated to creating beautiful and functional web applications.
                            Turning ideas into reality through clean code and creative design.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-base" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                            What I Do
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                                    <FaRocket className="text-blue-400 text-xs" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                            Get In Touch
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt className="text-blue-400 text-lg" />
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                                <FaPhone className="text-green-400 text-lg" />
                                <span className="text-sm">+88012xxxxxxxxx</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                                <FaEnvelope className="text-red-400 text-lg" />
                                <span className="text-sm">MMR@example.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="relative my-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-xs font-semibold">
                            Always Learning, Always Growing
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-gray-400 flex items-center gap-1">
                        © {year} Mahamudur. All rights reserved.
                    </p>
                    <p className="text-gray-400 flex items-center gap-1">
                        Made with
                        <FaHeart className="text-red-500 animate-pulse text-xs" />
                        by Mahamudur
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Back to Top ↑</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;