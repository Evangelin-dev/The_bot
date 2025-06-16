import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Manufacturing",
      description: "Streamline production processes, quality control, and supply chain management with our industrial solutions.",
      gradient: "from-blue-500 to-blue-600",
      glowColor: "bg-blue-400",
      icon: (
        <svg className="w-8 h-8 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2M12 4.2L20 8.1V10C20 15.1 16.9 18.7 12 19.9C7.1 18.7 4 15.1 4 10V8.1L12 4.2M8 12L10.5 14.5L16 9L14.6 7.6L10.5 11.7L9.4 10.6L8 12Z"/>
        </svg>
      )
    },
    {
      title: "Construction",
      description: "Optimize project management, resource allocation, and safety protocols for construction excellence.",
      gradient: "from-orange-500 to-red-500",
      glowColor: "bg-orange-400",
      icon: (
        <svg className="w-8 h-8 text-white animate-bounce" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12H5V20H19V12H22L12 3M12 7.7L17 12.7V18H15V14H9V18H7V12.7L12 7.7M11 15H13V16H11V15Z"/>
        </svg>
      )
    },
    {
      title: "Garments",
      description: "Enhance fashion retail operations, inventory management, and customer experience solutions.",
      gradient: "from-pink-500 to-purple-500",
      glowColor: "bg-pink-400",
      icon: (
        <svg 
          className="w-8 h-8 text-white animate-spin" 
          style={{ animationDuration: '3s' }} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12.04 2C12.78 2 13.43 2.5 13.62 3.22L14.46 6.61C15.21 6.8 15.9 7.12 16.54 7.54L19.59 6.16C20.26 5.87 21.04 6.15 21.38 6.82L22.35 8.68C22.69 9.35 22.47 10.16 21.82 10.53L19.35 12.04C19.4 12.35 19.4 12.65 19.35 12.96L21.82 14.47C22.47 14.84 22.69 15.65 22.35 16.32L21.38 18.18C21.04 18.85 20.26 19.13 19.59 18.84L16.54 17.46C15.9 17.88 15.21 18.2 14.46 18.39L13.62 21.78C13.43 22.5 12.78 23 12.04 23H10.96C10.22 23 9.57 22.5 9.38 21.78L8.54 18.39C7.79 18.2 7.1 17.88 6.46 17.46L3.41 18.84C2.74 19.13 1.96 18.85 1.62 18.18L0.65 16.32C0.31 15.65 0.53 14.84 1.18 14.47L3.65 12.96C3.6 12.65 3.6 12.35 3.65 12.04L1.18 10.53C0.53 10.16 0.31 9.35 0.65 8.68L1.62 6.82C1.96 6.15 2.74 5.87 3.41 6.16L6.46 7.54C7.1 7.12 7.79 6.8 8.54 6.61L9.38 3.22C9.57 2.5 10.22 2 10.96 2H12.04M12 8.5C9.79 8.5 8 10.29 8 12.5S9.79 16.5 12 16.5 16 14.71 16 12.5 14.21 8.5 12 8.5Z"/>
        </svg>
      )
    },
    {
      title: "Retailers",
      description: "Transform retail operations with smart POS systems, inventory tracking, and customer analytics.",
      gradient: "from-green-500 to-emerald-500",
      glowColor: "bg-green-400",
      icon: (
        <svg className="w-8 h-8 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7M9 3V4H15V3H9M7 6V19H17V6H7M9 8V17H11V8H9M13 8V17H15V8H13Z"/>
        </svg>
      )
    },
    {
      title: "Franchise Model",
      description: "Scale your franchise operations with centralized management and standardized processes.",
      gradient: "from-indigo-500 to-purple-600",
      glowColor: "bg-indigo-400",
      icon: (
        <svg 
          className="w-8 h-8 text-white animate-bounce" 
          style={{ animationDuration: '2s' }} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1V3H9V1L3 7V9H1V11H23V9M20 12H4V15H6V20H8V15H10V20H12V15H14V20H16V15H18V20H20V12Z"/>
        </svg>
      )
    },
    {
      title: "OEM Partners",
      description: "Collaborate with original equipment manufacturers through seamless integration solutions.",
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "bg-cyan-400",
      icon: (
        <svg 
          className="w-8 h-8 text-white animate-spin" 
          style={{ animationDuration: '4s' }} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M11.5 2C11.78 2 12 2.22 12 2.5V5.5C12 5.78 11.78 6 11.5 6S11 5.78 11 5.5V2.5C11 2.22 11.22 2 11.5 2M16.75 3.55C16.97 3.77 16.97 4.13 16.75 4.35L14.68 6.42C14.46 6.64 14.1 6.64 13.88 6.42S13.64 5.96 13.86 5.74L15.93 3.67C16.15 3.45 16.5 3.45 16.75 3.55M20.45 7.25C20.67 7.47 20.67 7.83 20.45 8.05L18.38 10.12C18.16 10.34 17.8 10.34 17.58 10.12S17.34 9.66 17.56 9.44L19.63 7.37C19.85 7.15 20.2 7.15 20.45 7.25M21.5 11C21.78 11 22 11.22 22 11.5S21.78 12 21.5 12H18.5C18.22 12 18 11.78 18 11.5S18.22 11 18.5 11H21.5M20.45 15.75C20.23 15.53 20.23 15.17 20.45 14.95L18.38 12.88C18.16 12.66 17.8 12.66 17.58 12.88S17.34 13.34 17.56 13.56L19.63 15.63C19.85 15.85 20.2 15.85 20.45 15.75M16.75 19.45C16.53 19.23 16.53 18.87 16.75 18.65L14.68 16.58C14.46 16.36 14.1 16.36 13.88 16.58S13.64 17.04 13.86 17.26L15.93 19.33C16.15 19.55 16.5 19.55 16.75 19.45M12.5 21C12.22 21 12 20.78 12 20.5V17.5C12 17.22 12.22 17 12.5 17S13 17.22 13 17.5V20.5C13 20.78 12.78 21 12.5 21M8.25 19.45C8.03 19.23 8.03 18.87 8.25 18.65L10.32 16.58C10.54 16.36 10.9 16.36 11.12 16.58S11.36 17.04 11.14 17.26L9.07 19.33C8.85 19.55 8.5 19.55 8.25 19.45M4.55 15.75C4.33 15.53 4.33 15.17 4.55 14.95L6.62 12.88C6.84 12.66 7.2 12.66 7.42 12.88S7.66 13.34 7.44 13.56L5.37 15.63C5.15 15.85 4.8 15.85 4.55 15.75M3.5 12C3.22 12 3 11.78 3 11.5S3.22 11 3.5 11H6.5C6.78 11 7 11.22 7 11.5S6.78 12 6.5 12H3.5M4.55 8.25C4.77 8.47 4.77 8.83 4.55 9.05L6.62 11.12C6.84 11.34 7.2 11.34 7.42 11.12S7.66 10.66 7.44 10.44L5.37 8.37C5.15 8.15 4.8 8.15 4.55 8.25M8.25 4.55C8.47 4.77 8.47 5.13 8.25 5.35L10.32 7.42C10.54 7.64 10.9 7.64 11.12 7.42S11.36 6.96 11.14 6.74L9.07 4.67C8.85 4.45 8.5 4.45 8.25 4.55Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-bold text-white mb-4">Industries <span className='bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent'>We Serve</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering businesses across diverse sectors with tailored solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-300 hover:to-blue-300 transition-all duration-500" key={index}>
              <div 
                className="group bg-black rounded-[calc(1rem-2px)] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-500`}>
                    {industry.icon}
                  </div>
                  <div className={`absolute inset-0 ${industry.glowColor} rounded-xl opacity-20 scale-0 group-hover:scale-110 transition-all duration-500`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;