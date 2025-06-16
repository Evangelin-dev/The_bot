'use client';
import Image from "next/image";
import React, { useState } from "react";

interface WhatsAppTestimonial {
    id: number;
    image: string;
    clientName: string;
    businessType: string;
    timestamp: string;
}

const WhatsAppTestimonials: React.FC = () => {
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    const testimonials: WhatsAppTestimonial[] = [
        {
            id: 1,
            image: "/GrowthPartner-1.png",
            clientName: "Rajog Enterprises",
            businessType: "The Bot Agency Client",
            timestamp: "2:30 PM"
        },
        {
            id: 2,
            image: "/GrowthPartner-2.png",
            clientName: "Rajog Groundscrew",
            businessType: "The Bot Agency Client",
            timestamp: "4:15 PM"
        },
        {
            id: 3,
            image: "/GrowthPartner-3.png",
            clientName: "ChemiPlant Engineering",
            businessType: "The Bot Agency Client",
            timestamp: "4:15 PM"
        },
    ];

    const handleImageLoad = (id: number): void => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    const handleImageError = (id: number): void => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-sm font-medium text-green-200 backdrop-blur-sm mb-6">
                        💬 Real Client Messages
                    </div>

                    <h1 className="text-3xl font-bold text-white dark:text-white capitalize">Still Don&apos;t Trust Us See The Results</h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Authentic feedback straight from our clients&apos; messages
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl md:rounded-[2.5rem] p-2 md:p-4 shadow-2xl border border-slate-700/50">
                        
                        <div className="bg-green-600 rounded-t-2xl md:rounded-t-[2rem] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3 md:space-x-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm md:text-base">
                                        TBA
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm md:text-base">
                                        The Bot Agency Clients
                                    </h3>
                                    <p className="text-green-100 text-xs md:text-sm opacity-80">
                                        Multiple testimonials
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 md:space-x-3">
                                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                <span className="text-green-100 text-xs">Online</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-slate-300 to-slate-300 rounded-b-2xl md:rounded-b-[2rem] p-4 md:p-6 min-h-[600px] md:min-h-[700px] relative">
                            <div className="absolute inset-0 opacity-5 rounded-b-2xl md:rounded-b-[2rem] overflow-hidden">
                                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEwVjMwTTEwIDIwSDMwIiBzdHJva2U9IiM5Q0E5QjMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=')] repeat"></div>
                            </div>

                            <div className="relative z-10 flex flex-col space-y-4 md:space-y-6 h-full justify-end">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full max-w-full">
                                        <div className="bg-green-500 rounded-2xl rounded-tr-md p-3 md:p-4 shadow-lg">
                                            <div className="text-white/80 text-xs mb-2 font-medium">
                                                {testimonial.clientName}
                                            </div>
                                            
                                            <div className="relative bg-white/10 rounded-lg overflow-hidden mb-2">
                                                {!loadedImages[testimonial.id] && (
                                                    <div className="absolute inset-0 bg-white/10 rounded-lg flex items-center justify-center min-h-[200px]">
                                                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    </div>
                                                )}
                                                <Image
                                                    src={testimonial.image}
                                                    alt={`Testimonial from ${testimonial.clientName}`}
                                                    className={`w-full h-auto max-h-[250px] md:max-h-[300px] object-cover transition-opacity duration-500 ${
                                                        loadedImages[testimonial.id] ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                    onLoad={() => handleImageLoad(testimonial.id)}
                                                    onError={() => handleImageError(testimonial.id)}
                                                    width={400}
                                                    height={300}
                                                />
                                            </div>

                                            <div className="flex items-center justify-end space-x-1">
                                                <span className="text-white/70 text-xs">{testimonial.timestamp}</span>
                                                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-blue-300 -ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-green-500 border-b-[8px] border-b-transparent ml-auto mr-2 -mt-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppTestimonials;