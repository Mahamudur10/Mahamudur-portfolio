// components/Contact.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে তুমি ইমেইল সেন্ড করার ফাংশন যোগ করতে পারো
        alert("Thank you! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        { icon: FaEnvelope, text: "MMR@example.com", link: "MMR@example.com", color: "text-red-500" },
        { icon: FaPhone, text: "+88012xxxxxxxxx", link: "tel:+88012xxxxxxxxx", color: "text-green-500" },
        { icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh", link: "#", color: "text-blue-500" },
    ];

    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/Mahamudur10", color: "hover:bg-gray-800" },
        { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mahamudur-rahman10/", color: "hover:bg-blue-700" },
        { icon: FaInstagram, url: "https://www.instagram.com/mahamudur100/", color: "hover:bg-pink-600" },
    ];

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span className="text-blue-600 font-semibold text-lg">Get In Touch</span>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Contact Me
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly chat
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side - Contact Info */}
                    <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                        }`}>
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`text-xl ${info.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-gray-700 font-medium">{info.text}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}
                                        >
                                            <Icon className="text-xl" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                        }`}>
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;