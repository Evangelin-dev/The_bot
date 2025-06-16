'use client';
import React, { useState } from 'react';
import { Menu, X, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar);
    };

    return (
        <header className="fixed left-0 top-0 w-full flex items-center h-20 z-50 backdrop-blur-lg bg-black/10 border-b border-white/10">
            <nav className="relative mx-auto lg:max-w-7xl w-full px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center min-w-max">
                    <Link href="/" className="font-semibold flex items-center gap-x-2">
                        <div className="flex items-center -space-x-3">
                            <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
                            <span className="h-6 aspect-square bg-violet-600 dark:bg-violet-400 blur rounded-full flex" />
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/bot-new-white-logo.png"
                                alt="The Bot Logo"
                                width={150}
                                height={50}
                                priority
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="/" className="text-white/80 hover:text-white transition-all duration-300 font-medium">Home</Link>
                    <a href="https://www.thebot.agency/about-us" target="_blank" rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 font-medium">About</a>
                    <a href="https://www.thebot.agency/case-study" target="_blank" rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 font-medium">Case Studies</a>
                    <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 font-medium">Contact</a>
                </div>

                <div className="hidden lg:block">
                    <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <button
                    onClick={toggleNavbar}
                    className="lg:hidden p-2 text-white"
                    aria-label="Toggle menu"
                >
                    {openNavbar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <div className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 lg:hidden transition-all duration-300 ${openNavbar ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                    <div className="px-6 py-6 space-y-4">
                        <Link href="/" className="block text-white/80 hover:text-white transition-colors font-medium">Home</Link>
                        <a href="https://www.thebot.agency/about-us" target="_blank" rel="noopener noreferrer"
                            className="block text-white/80 hover:text-white transition-colors font-medium">About</a>
                        <a href="https://www.thebot.agency/case-study" target="_blank" rel="noopener noreferrer"
                            className="block text-white/80 hover:text-white transition-colors font-medium">Case Studies</a>
                        <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors font-medium">Apply Now</a>
                        <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer"
                            className="block text-white/80 hover:text-white transition-colors font-medium">Contact</a>
                        <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-semibold mt-4">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-8px) translateX(3px) rotate(1deg);
                    }
                    50% {
                        transform: translateY(-4px) translateX(-3px) rotate(-0.5deg);
                    }
                    75% {
                        transform: translateY(-12px) translateX(2px) rotate(0.5deg);
                    }
                }
                
                .floating-button {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
            <Navbar />
            <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white/90 text-sm font-medium">
                            <Award className="w-4 h-4 text-yellow-400" />
                            Join 100+ Successful Manufacturers
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
                                Scale Your Factory to
                                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                    ₹1 Crore/Month
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                                Transform your manufacturing business with our proven
                                <span className="text-purple-400 font-bold"> 10 Cr Club system</span> —
                                from ₹20L to ₹1Cr monthly revenue in 90 days.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <a href="https://www.thebot.agency/contact-us" target="_blank" rel="noopener noreferrer"
                                className="floating-button group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 min-w-[200px] justify-center">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="pt-20">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
                                <div className="group relative p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg border-2 border-green-400/30 rounded-3xl hover:border-green-400/60 transition-all duration-500 hover:scale-110 hover:rotate-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-green-400/50">
                                            <TrendingUp className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-3 tracking-tight">
                                            100+
                                        </div>
                                        <div className="text-xl font-bold text-white mb-2">Manufacturers</div>
                                        <div className="text-green-300/80 font-semibold text-lg">Successfully Scaled</div>
                                    </div>
                                </div>

                                <div className="group relative p-8 bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-lg border-2 border-purple-400/30 rounded-3xl hover:border-purple-400/60 transition-all duration-500 hover:scale-110 hover:rotate-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-purple-400/50">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent mb-3 tracking-tight">
                                            ₹50Cr+
                                        </div>
                                        <div className="text-xl font-bold text-white mb-2">Total Revenue</div>
                                        <div className="text-purple-300/80 font-semibold text-lg">Generated for Clients</div>
                                    </div>
                                </div>

                                <div className="group relative p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg border-2 border-orange-400/30 rounded-3xl hover:border-orange-400/60 transition-all duration-500 hover:scale-110 hover:rotate-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-orange-400/50">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent mb-3 tracking-tight">
                                            90
                                        </div>
                                        <div className="text-xl font-bold text-white mb-2">Days Average</div>
                                        <div className="text-orange-300/80 font-semibold text-lg">To Reach Success</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
            </section>
        </>
    );
}