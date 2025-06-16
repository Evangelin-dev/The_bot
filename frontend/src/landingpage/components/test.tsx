"use client";
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Surendra",
    role: "Makin Exports",
    company: "Manufacturing",
    image: "/bot-new-white-logo.png",
    text: "From zero to a thriving business, The Bot Agency crafted a strategy that actually worked.",
    rating: 5,
    result: "300% Growth"
  },
  {
    name: "Groundscrew",
    role: "E-commerce Brand",
    company: "Retail",
    image: "/bot-new-white-logo.png",
    text: "The Bot Agency's strategies helped us achieve a 200% ROAS and transform our business!",
    rating: 4,
    result: "200% ROAS"
  },
  {
    name: "The Villain Live",
    role: "Content Creator",
    company: "Entertainment",
    image: "/bot-new-white-logo.png",
    text: "Providing very good marketing services with exceptional results and professional support.",
    rating: 5,
    result: "5x Reach"
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: SetStateAction<number>) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  const { name, role, company, image, text, rating, result } = testimonials[current];

  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 text-sm font-medium text-pink-200 backdrop-blur-sm mb-6">
            Client Success Stories
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real results from real partnerships that drive business growth
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">

          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 group bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-pink-500/50 p-3 rounded-full transition-all duration-300 hover:bg-slate-700"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 group bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 p-3 rounded-full transition-all duration-300 hover:bg-slate-700"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10 p-[1px] rounded-3xl backdrop-blur-sm">
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-800/50">

              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 flex items-center justify-center border border-slate-700/50">
                  <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="text-center mb-10">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium italic mb-8">
                  &quot;{text}&quot;
                </p>

                <div className="flex justify-center items-center gap-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-6 h-6 ${idx < rating ? 'text-yellow-400' : 'text-slate-600'} transition-colors`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50">

                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 p-[2px]">
                      <Image
                        src={image}
                        width={64}
                        height={64}
                        alt={`${name} avatar`}
                        className="w-full h-full object-cover rounded-full bg-slate-800"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="text-pink-400 font-medium">{role}</p>
                    <p className="text-slate-500 text-sm">{company}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full">
                    <span className="text-green-400 font-semibold text-sm">{result}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${current === index
                    ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-blue-500'
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                  }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-slate-500 hover:text-slate-400 text-sm flex items-center space-x-2 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;