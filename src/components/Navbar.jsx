// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollToSection from "@/hooks/useScrollToSection";
import {
    FaHome,
    FaUser,
    FaCode,
    FaGraduationCap,
    FaProjectDiagram,
    FaEnvelope,
    FaBars,
    FaTimes,
    FaBriefcase
} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();
    const scrollToSection = useScrollToSection();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const handleActiveSection = () => {
            const sections = ["home", "about", "skills", "education", "work", "projects", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            setActiveSection("home");
        };

        window.addEventListener("scroll", handleActiveSection);
        handleActiveSection();

        return () => window.removeEventListener("scroll", handleActiveSection);
    }, [pathname]);


    const navLinks = [
        { name: "Home", href: "/", sectionId: "home", icon: FaHome },
        { name: "About", href: "/#about", sectionId: "about", icon: FaUser },
        { name: "Skills", href: "/#skills", sectionId: "skills", icon: FaCode },
        { name: "Education", href: "/#education", sectionId: "education", icon: FaGraduationCap },
        { name: "Work", href: "/#work", sectionId: "work", icon: FaBriefcase },
        { name: "Projects", href: "/#projects", sectionId: "projects", icon: FaProjectDiagram },
        { name: "Contact", href: "/#contact", sectionId: "contact", icon: FaEnvelope },
    ];

    const handleNavigation = (e, link) => {
        if (pathname === "/" && link.sectionId) {
            e.preventDefault();
            scrollToSection(link.sectionId);
            setIsMenuOpen(false);
        }
    };


    const handleLogoClick = () => {
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };


    const isLinkActive = (link) => {
        if (pathname !== "/") {
            return false;
        }

        if (link.sectionId === "home") {
            return activeSection === "home";
        }

        return activeSection === link.sectionId;
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                : "bg-white/80 backdrop-blur-sm py-3 md:py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" onClick={handleLogoClick} className="group relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xs md:text-sm">M</span>
                            </div>
                            <span className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 hidden xs:inline-block">
                                Mahamudur
                            </span>
                            <span className="text-sm md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 xs:hidden">
                                M
                            </span>
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile/tablet, show on large screens */}
                    <div className="hidden xl:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = isLinkActive(link);

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavigation(e, link)}
                                    className={`group relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                                        isActive
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className={`text-sm transition-all duration-300 ${isActive ? "text-white scale-110" : "text-gray-500 group-hover:scale-110"}`} />
                                    <span className="whitespace-nowrap">{link.name}</span>
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full"></span>
                                    )}
                                    {!isActive && (
                                        <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile/Tablet Menu Button - Show on smaller screens */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            {isMenuOpen ? <FaTimes className="text-sm md:text-xl" /> : <FaBars className="text-sm md:text-xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Fully responsive */}
            <div className={`xl:hidden fixed top-[56px] md:top-[64px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 transform z-50 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            }`}>
                <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = isLinkActive(link);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    handleNavigation(e, link);
                                    setIsMenuOpen(false);
                                }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                                        : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                                }`}
                            >
                                <Icon className={isActive ? "text-white text-base md:text-lg" : "text-blue-600 text-base md:text-lg"} />
                                <span className="font-medium text-sm md:text-base">{link.name}</span>
                                {isActive && (
                                    <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                                )}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;